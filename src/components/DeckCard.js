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
import { useRevenueCat } from "../context/RevenueCatProvider";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("screen");

const DeckCard = ({ card }) => {
  const { purchasePackage, packages } = useRevenueCat();

  const handlePurchase = async () => {
    if (packages.length > 0) {
      await purchasePackage(packages[0]);
    } else {
      console.error("No packages available for purchase");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.cardContainer, { backgroundColor: card.color }]}>
        <View style={styles.cardContent} />
        <View style={styles.imageContainer}>
          <Image source={card.image} style={styles.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{card.title}</Text>
        </View>
        {card.isLocked && (
          <BlurView intensity={5} style={styles.absoluteFill}>
            <View style={styles.lockIconContainer}>
              <AntDesign name="lock1" size={40} color="white" />
            </View>
          </BlurView>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={card.isLocked ? handlePurchase : () => {}}>
          <View style={[styles.button, { backgroundColor: card.color }]}>
            <Text style={styles.buttonText}>
              {card.isLocked ? "BUY NOW" : "Play"}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: WIDTH * 0.27,
    height: HEIGHT * 0.24,
  },
  cardContainer: {
    width: WIDTH * 0.27,
    height: HEIGHT * 0.16,
    borderRadius: 24,
    overflow: "hidden",
  },
  cardContent: {
    height: "33%",
  },
  imageContainer: {
    backgroundColor: "white",
    height: HEIGHT * 0.11,
    width: WIDTH * 0.27,
    position: "absolute",
    bottom: 0,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    position: "absolute",
    top: -15,
  },
  titleContainer: {
    position: "absolute",
    top: HEIGHT * 0.069,
    left: WIDTH * 0.015,
    right: WIDTH * 0.015,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    fontSize: 12,
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
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
  },
});

export default DeckCard;
