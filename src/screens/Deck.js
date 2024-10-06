import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DeckCard from "../components/DeckCard";
import FilterComponent from "../components/FilterComponent";

const Deck = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
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

  const deckData = [
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
      isLocked: true,
      image: require("../assets/relationships.png"),
      color: "#F87171",
    },
  ];

  const renderItems = useCallback(({ item }) => {
    return <DeckCard card={item} />;
  }, []);

  const renderFilterItems = useCallback(({ item }) => {
    return <FilterComponent filterItem={item} toggleSwitch={toggleSwitch} />;
  }, []);

  const toggleSwitch = (id) => {
    const updatedFilterData = filterData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      }
      return item;
    });
    setFilterData(updatedFilterData);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
      <Image
        source={require("../assets/bg.jpeg")}
        style={{
          ...StyleSheet.absoluteFillObject,
          objectFit: "cover",
        }}
      />
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View className="flex-row justify-between px-3">
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <MaterialIcons name="settings" size={34} color="white" />
          </Pressable>
          <AntDesign name="infocirlce" size={32} color="white" />
        </View>

        {/* Choose deck */}
        <View className="mt-10">
          <View className="justify-center items-center">
            <Text className="font-[Poppins-Bold] text-3xl tracking-widest text-white">
              CHOOSE DECK
            </Text>
          </View>
          <View className="mt-7 justify-center items-center">
            <FlatList
              data={deckData}
              renderItem={renderItems}
              horizontal
              scrollEnabled={false}
              contentContainerStyle={{
                gap: 17,
              }}
            />
          </View>
        </View>

        {/* Package buy */}
        <ImageBackground
          source={require("../assets/curvybg.png")}
          style={{
            height: 150,
            width: 420,
            borderRadius: 30,
            overflow: "hidden",
            alignSelf: "center",
          }}
        >
          <View className="flex-row">
            <View className="justify-center items-center h-full w-1/3 top-5">
              <Text>
                <FontAwesome name="lock" size={44} color="black" />
              </Text>
            </View>
            <View className="w-1/3 h-full justify-center items-center">
              <View className="mt-7">
                <Text className="text-indigo-950 text-xl font-[Poppins-Bold] tracking-tighter">
                  EXPLORE
                </Text>
                <Text className="text-indigo-950 text-xl font-[Poppins-Bold] tracking-tighter">
                  PREMIUM DECKS
                </Text>
              </View>
              <View className="bg-indigo-950 p-1 w-full py-2 rounded-2xl">
                <Text className="text-white text-sm font-[Poppins-Bold] tracking-tighter">
                  Unlock all decks $1000
                </Text>
              </View>
            </View>
            <View className="w-1/3 h-full justify-center items-center">
              <View>
                <Image source={require("../assets/cards.png")} className="h-16 w-16"/>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Filters */}
        <View className="mt-3">
          <View className="m-4 px-3 flex-1">
            <Text className="text-2xl font-[Poppins-SemiBold] text-white tracking-widest">
              FILTERS
            </Text>
          </View>
          <View>
            <FlatList
              data={filterData}
              renderItem={renderFilterItems}
              contentContainerStyle={{
                gap: 10,
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Deck;
