import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Platform, ActivityIndicator } from "react-native";
import Purchases, { LOG_LEVEL } from "react-native-purchases";

const RevenueCatContext = createContext(null);

export const useRevenueCat = () => useContext(RevenueCatContext);

export const RevenueCatProvider = ({ children }) => {
  const [user, setUser] = useState({ bundlePurchased: false });
  const [packages, setPackages] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const apiKey =
          Platform.OS === "ios"
            ? "appl_MOdzpKXixePcmhabljBfIwqxzbs" // Secure your API keys
            : "your_android_api_key"; // Secure your API keys
        await Purchases.configure({
          apiKey,
        });
        setIsReady(true);
        Purchases.setLogLevel(LOG_LEVEL.VERBOSE);
        Purchases.addCustomerInfoUpdateListener(updateCustomerInfo);
        await loadOfferings();
      } catch (error) {
        console.error("Error initializing Purchases:", error);
      }
    };
    init();

    return () => {
      Purchases.removeCustomerInfoUpdateListener(updateCustomerInfo);
    };
  }, []);

  const loadOfferings = async () => {
    try {
      const offerings = await Purchases.getOfferings();
      if (offerings.current) {
        setPackages(offerings.current.availablePackages);
      }
    } catch (error) {
      console.error("Error loading offerings:", error);
    }
  };

  const purchasePackage = async (packageToPurchase) => {
    try {
      const { purchaserInfo } = await Purchases.purchasePackage(
        packageToPurchase
      );
      console.log("Purchase successful:", purchaserInfo);
      updateCustomerInfo(purchaserInfo);
      setUser({ bundlePurchased: true });
    } catch (error) {
      if (error?.userCancelled) {
        console.log("User cancelled purchase");
      } else {
        console.error("Error purchasing package:", error);
      }
    }
  };

  const updateCustomerInfo = useCallback((customerInfo) => {
    const bundlePurchased =
      customerInfo.entitlements.active["gx_bundle"] != null;
    setUser({ bundlePurchased });
  }, []);

  const restorePurchases = async () => {
    try {
      const customerInfo = await Purchases.restorePurchases();
      updateCustomerInfo(customerInfo);
    } catch (error) {
      console.error("Error restoring purchases:", error);
    }
  };

  const value = {
    user,
    packages,
    purchasePackage,
    restorePurchases,
    isReady,
  };

  if (!isReady) {
    return <ActivityIndicator />;
  }

  return (
    <RevenueCatContext.Provider value={value}>
      {children}
    </RevenueCatContext.Provider>
  );
};
