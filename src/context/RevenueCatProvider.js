import { useContext, createContext, useState, useEffect } from "react";
import { Platform } from "react-native";
import Purchases, { LOG_LEVEL } from "react-native-purchases";

const RevenueCatContext = createContext(null);

// const apiKeys = {
//   ios: "appl_MOdzpKXixePcmhabljBfIwqxzbs",
// };

export const useRevenueCat = () => {
  return useContext(RevenueCatContext);
};

export const RevenueCatProvider = ({ children }) => {
  const [user, setUser] = useState({ bundle_purchased: false });
  const [packages, setPackages] = useState([]);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const init = async () => {
      if (Platform.OS === "ios") {
        await Purchases.configure({
          apiKey: "appl_MOdzpKXixePcmhabljBfIwqxzbs",
        });
      } else {
        Alert("Platform not supported");
      }
      setIsReady(true);
      Purchases.setLogLevel(LOG_LEVEL.DEBUG);
      await loadOfferings();
    };
    init()
  }, []);

  //Load all the offerings a user can purchase
  const loadOfferings = async () => {
    try {
         console.log("MEOW");
        const offerings = await Purchases.getOfferings();
        console.log(offerings)
        const currentOffering = offerings.current;
       
        console.log(currentOffering);
        if (currentOffering) {
             setPackages(currentOffering.availablePackages);
           }
        
    } catch (error) {
        console.log(error)
        
    }
 

  };

  const purchaseAPackage = async () => {};

  // update customer info
  const updateCustomerInfo = async (customerInfo) => {};

  //restore previous purchase
  const restorePurchase = async () => {
    const customer = await Purchases.restorePurchases();
    return customer;
  };

  const value = {
    restorePurchase,
    user,
    packages,
    purchaseAPackage,
  };
  if (!isReady) {

    return <></>;
  }
  return (
    <RevenueCatContext.Provider value={value}>
      {children}
    </RevenueCatContext.Provider>
  );
};
