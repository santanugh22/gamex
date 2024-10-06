import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";

import AntDesign from "@expo/vector-icons/AntDesign";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("screen");

const DeckCard = ({ card }) => {
  return (
    <View style={styles.mainContainer} className="rounded-3xl overflow-hidden">
      <View
        style={[
          styles.cardContainer,
          {
            backgroundColor: card.color,
          },
        ]}
        className="rounded-3xl"
      >
        <View className={`h-1/3`} />
        <View
          className="bg-white"
          style={{
            height: HEIGHT * 0.11,
            width: WIDTH * 0.27,
            position: "absolute",
            bottom: 0,
            borderRadius: 20,
          }}
        >
          <View className="justify-center items-center">
            <Image
              source={card.image}
              className="h-20 w-20"
              style={{
                position: "absolute",
                top: -15,
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: HEIGHT * 0.069,
              left: WIDTH * 0.015,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text className="font-[Poppins-SemiBold] text-center ml-1 text-wrap px-1">
              {card.title}
            </Text>
          </View>
        </View>
        {card.isLocked && (
          <BlurView intensity={5} style={styles.absoluteFill}>
            <View style={styles.lockIconContainer}>
              <AntDesign name="lock1" size={40} color="white" />
            </View>
          </BlurView>
        )}
      </View>
      <View className="justify-center items-center mt-2">
        <Pressable>
          <View
            className="px-4 rounded-3xl py-1 justify-center items-center border border-white"
            style={{
              backgroundColor: card.color,
            }}
          >
            <Text className="text-white font-[Poppins-SemiBold] text-sm">
              {card.isLocked ? "BUY NOW" : "Play"}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default DeckCard;

const styles = StyleSheet.create({
  mainContainer: {
    width: WIDTH * 0.27,
    height: HEIGHT * 0.24,
  },
  cardContainer: {
    width: WIDTH * 0.27,
    height: HEIGHT * 0.16,
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  lockIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
