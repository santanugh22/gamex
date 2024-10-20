import React, { useCallback, useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DeckCard from "../components/DeckCard";
import FilterComponent from "../components/FilterComponent";
import { useRevenueCat } from "../context/RevenueCatProvider";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const Deck = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { user, packages, purchasePackage } = useRevenueCat();
  const [filterData, setFilterData] = useState([
    {
      id: 1,
      title: "FUNNY",
      numOfCards: 80,
      isSelected: false,
      backgroundColor: "#FFB6C1",
      trackColor: "#FFB6C1",
      thumbColor: "#FFB6C1",
      image: require("../assets/funny.png"),
    },
    {
      id: 2,
      title: "AWKWARD",
      numOfCards: 80,
      isSelected: true,
      backgroundColor: "#FFD700",
      trackColor: "#FFA500",
      thumbColor: "#FF4500",
      image: require("../assets/awkward.png"),
    },
    {
      id: 3,
      title: "ADULT",
      numOfCards: 80,
      isSelected: false,
      backgroundColor: "#98FB98",
      trackColor: "#32CD32",
      thumbColor: "#228B22",
      image: require("../assets/egg.png"),
    },
  ]);

  const deckData = useMemo(
    () => [
      {
        id: 1,
        title: "PARTY AND FUN",
        isLocked: false,
        image: require("../assets/party.png"),
        color: "#FFB6C1",
      },
      {
        id: 2,
        title: "FOOD",
        isLocked: false,
        image: require("../assets/food.png"),
        color: "#B2EC5D",
      },
      {
        id: 3,
        title: "RELATIONSHIPS",
        isLocked: !user.bundlePurchased,
        image: require("../assets/relationships.png"),
        color: "#F87171",
      },
    ],
    [user.bundlePurchased]
  );

  const renderItems = useCallback(({ item }) => {
    return <DeckCard card={item} />;
  }, []);

  const renderFilterItems = useCallback(({ item }) => {
    return <FilterComponent filterItem={item} toggleSwitch={toggleSwitch} />;
  }, []);

  const toggleSwitch = useCallback((id) => {
    setFilterData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  }, []);

  const handleUnlockAllDecks = useCallback(() => {
    if (packages.length > 0) {
      purchasePackage(packages[0]);
    } else {
      console.error("No packages available for purchase");
    }
  }, [packages, purchasePackage]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <Image
        source={require("../assets/bg.jpeg")}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <MaterialIcons name="settings" size={34} color="white" />
          </Pressable>
          <AntDesign name="infocirlce" size={32} color="white" />
        </View>

        {/* Choose deck */}
        <View style={styles.chooseDeckSection}>
          <Text style={styles.chooseDeckText}>CHOOSE DECK</Text>
          <FlatList
            data={deckData}
            renderItem={renderItems}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={3}
            contentContainerStyle={styles.deckList}
          />
        </View>

        {/* Package buy */}
        <ImageBackground
          source={require("../assets/curvybg.png")}
          style={styles.packageBuyBackground}
        >
          <View style={styles.packageBuyContent}>
            <View style={styles.lockIconContainer}>
              <FontAwesome name="lock" size={44} color="black" />
            </View>
            <View style={styles.packageTextContainer}>
              <Text style={styles.packageTitle}>EXPLORE</Text>
              <Text style={styles.packageTitle}>PREMIUM DECKS</Text>
              <Pressable
                style={styles.unlockButton}
                onPress={handleUnlockAllDecks}
              >
                <Text style={styles.unlockButtonText}>
                  Unlock all decks ${packages[0]?.product.price}
                </Text>
              </Pressable>
            </View>
            <View style={styles.packageImageContainer}>
              <Image
                source={require("../assets/cards.png")}
                style={styles.packageImage}
              />
            </View>
          </View>
        </ImageBackground>

        {/* Filters */}
        <View style={styles.filtersSection}>
          <Text style={styles.filtersTitle}>FILTERS</Text>
          <FlatList
            data={filterData}
            renderItem={renderFilterItems}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={3}
            contentContainerStyle={styles.filterList}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    objectFit: "cover",
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  chooseDeckSection: {
    marginTop: 40,
  },
  chooseDeckText: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    letterSpacing: 2,
    color: "white",
    textAlign: "center",
  },
  deckList: {
    gap: 17,
    paddingHorizontal: 12,
    marginTop: 28,
  },
  packageBuyBackground: {
    height: HEIGHT * 0.15,
    width: WIDTH * 0.95,
    borderRadius: 30,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 20,
  },
  packageBuyContent: {
    flexDirection: "row",
    height: "100%",
  },
  lockIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "33%",
    height: "100%",
    paddingTop: 20,
  },
  packageTextContainer: {
    width: "33%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 28,
  },
  packageTitle: {
    color: "#1E293B",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    letterSpacing: -0.5,
  },
  unlockButton: {
    backgroundColor: "#1E293B",
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 16,
    marginTop: 8,
  },
  unlockButtonText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    letterSpacing: -0.5,
  },
  packageImageContainer: {
    width: "33%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  packageImage: {
    height: 64,
    width: 64,
  },
  filtersSection: {
    marginTop: 12,
    paddingHorizontal: 16,
  },
  filtersTitle: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    color: "white",
    letterSpacing: 2,
  },
  filterList: {
    gap: 10,
    marginTop: 12,
  },
});

export default Deck;
