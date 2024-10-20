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
        await Purchases.configure({
          apiKey: "appl_MOdzpKXixePcmhabljBfIwqxzbs",
        });

        setIsReady(true);
        Purchases.setLogLevel(LOG_LEVEL.DEBUG);
        Purchases.addCustomerInfoUpdateListener((customerInfo) => {
          console.log("customerInfo", customerInfo);
          updateCustomerInfo(customerInfo);
        });
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
      const offerings = await Purchases.getOfferings();

      const currentOffering = offerings.current;
      if (currentOffering) {
        setPackages(currentOffering.availablePackages);
        console.log("availablePackages", currentOffering.availablePackages[0]);
      }
    } catch (error) {
      console.error("Error loading offerings:", error);
    }
  };

  const purchasePackage = async (packageToPurchase) => {
    try {
      const purchaserInfo = await Purchases.purchasePackage(packageToPurchase);
      if (packageToPurchase.product.identifier == "gx_bundle") {
        setUser({ bundle_purchased: true });
      }
    } catch (error) {
      if (!error.userCancelled) {
        console.error("Error purchasing package:", error);
      }
    }
  };

  // Update customer info
  const updateCustomerInfo = (customerInfo) => {
    try {
      if (customerInfo.entitlements.active["gx_bundle"]) {
        setUser({ bundle_purchased: true });
      }
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
    purchasePackage,
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
