import { useContext, createContext, useState, useEffect } from "react";
import { Platform, Alert } from "react-native";
import Purchases, { LOG_LEVEL } from "react-native-purchases";

const RevenueCatContext = createContext(null);

export const useRevenueCat = () => {
  return useContext(RevenueCatContext);
};

export const RevenueCatProvider = ({ children }) => {
  const [user, setUser] = useState({ bundle_purchased: false });
  const [packages, setPackages] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        if (Platform.OS === "ios") {
          await Purchases.configure({
            apiKey: "appl_MOdzpKXixePcmhabljBfIwqxzbs",
          });
        } else {
          Alert.alert("Platform not configured for in-app purchases");
        }
        setIsReady(true);
        Purchases.setLogLevel(LOG_LEVEL.DEBUG);
        await loadOfferings();
      } catch (error) {
        console.error("Error initializing Purchases:", error);
      }
    };
    init();
  }, []);

  // Load all the offerings a user can purchase
  const loadOfferings = async () => {
    try {
      console.log("MEOW");
      const offerings = await Purchases.getOfferings();
      console.log(offerings);
      const currentOffering = offerings.current;
      console.log(currentOffering);
      if (currentOffering) {
        setPackages(currentOffering.availablePackages);
      }
    } catch (error) {
      console.error("Error loading offerings:", error);
    }
  };

  const purchasePackage = async (packageToPurchase) => {
    try {
      const purchaserInfo = await Purchases.purchasePackage(packageToPurchase);
      if (purchaserInfo.entitlements.active["your_entitlement_id"]) {
        setUser({ bundle_purchased: true });
      }
    } catch (error) {
      if (!error.userCancelled) {
        console.error("Error purchasing package:", error);
      }
    }
  };

  // Update customer info
  const updateCustomerInfo = async () => {
    try {
      const customerInfo = await Purchases.getCustomerInfo();
      setUser({
        bundle_purchased: customerInfo.entitlements.active[
          "your_entitlement_id"
        ]
          ? true
          : false,
      });
    } catch (error) {
      console.error("Error updating customer info:", error);
    }
  };



  // Restore previous purchase
  const restorePurchase = async () => {
    try {
      const customer = await Purchases.restorePurchases();
      return customer;
    } catch (error) {
      console.error("Error restoring purchases:", error);
    }
  };

  const value = {
    restorePurchase,
    user,
    packages,
    purchaseAPackage,
    updateCustomerInfo,
  };

  if (!isReady) {
    return null;
  }

  return (
    <RevenueCatContext.Provider value={value}>
      {children}
    </RevenueCatContext.Provider>
  );
};
