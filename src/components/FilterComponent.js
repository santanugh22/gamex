import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Switch,
} from "react-native";
import Animated from "react-native-reanimated";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("screen");

const FilterComponent = ({ filterItem, toggleSwitch }) => {
  return (
    <Animated.View
      style={{
        width: WIDTH * 0.9,
        height: HEIGHT * 0.06,
        backgroundColor: filterItem.backgroundColor,
        alignSelf: "center",
        borderRadius: 17,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <View className="justify-center items-center">
        <Image source={filterItem.image} className="h-16 w-16 object-cover" />
      </View>
      <View className="justify-center items-center">
        <Text className="text-indigo-950 font-[Poppins-Bold] text-xl ml-2">
          {filterItem.title}
        </Text>
        <Text className="text-white font-[Poppins-Medium] text-sm ml-2">
          {filterItem.numOfCards} CARDS
        </Text>
      </View>
      <View>
        <Switch
          trackColor={{ false: "#767577", true: filterItem.trackColor }}
          thumbColor={filterItem.isSelected ? filterItem.thumbColor : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch(filterItem.id)}
          value={filterItem.isSelected}
        />
      </View>
    </Animated.View>
  );
};

export default FilterComponent;

