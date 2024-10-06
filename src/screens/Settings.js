import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  Switch,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

const Settings = () => {
  const insets = useSafeAreaInsets();
  const [isKidMode, setIsKidMode] = useState(false);

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
        <View className="flex-row justify-between py-2 bg-blue-950 items-center">
          <View className="px-6">
            <MaterialIcons name="settings" size={34} color="white" />
          </View>
          <View className="justify-center items-center py-1 mt-2 right-32">
            <Text className="text-4xl font-[Poppins-Bold] text-white">
              Settings
            </Text>
          </View>
        </View>

        {/* Music and info options */}
        <View className="flex-row justify-between px-4 mt-5">
          <View className="p-2 bg-blue-950 rounded-full">
            <FontAwesome name="music" size={24} color="white" />
          </View>

          <View className="p-2 bg-blue-950 rounded-full">
            <AntDesign name="infocirlce" size={24} color="white" />
          </View>
        </View>
        <View className="px-4 mt-8">
          {/* Language Option */}
          <Pressable className="flex-row justify-between items-center bg-green-500 p-4 rounded-xl mb-4 py-10">
            <View className="flex-row items-center">
              <MaterialIcons name="language" size={24} color="white" />
              <Text className="text-white text-xl font-[Poppins-SemiBold] ml-4">
                Languages
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-white mr-2">Eng (US)</Text>
              <Image
                className="h-10 w-10"
                source={require("../assets/usflag.png")}
              />

              <AntDesign name="caretright" size={24} color="black" />
            </View>
          </Pressable>

          {/* Kid Mode Option */}
          <View className="flex-row justify-between items-center bg-red-400 p-4 rounded-xl mb-4 w-11/12 py-10">
            <View className="flex-row items-center">
              <FontAwesome name="star" size={24} color="white" />
              <Text className="text-white text-xl font-[Poppins-SemiBold] ml-4">
                Kid Mode
              </Text>
            </View>
            <Switch
              trackColor={{ false: "pink", true: "pink" }}
              thumbColor={isKidMode ? "#f5dd4b" : "black"}
              ios_backgroundColor="pink"
              onValueChange={() => setIsKidMode(!isKidMode)}
              value={isKidMode}
            />
          </View>

          {/* Purchases Option */}
          <Pressable className="flex-row justify-between items-center bg-cyan-500 p-4 rounded-xl mb-4 py-10 w-5/6">
            <View className="flex-row items-center">
              <MaterialIcons name="attach-money" size={24} color="white" />
              <Text className="text-white text-xl font-[Poppins-SemiBold] ml-4">
                Purchases
              </Text>
            </View>
            <AntDesign name="caretright" size={24} color="black" />
          </Pressable>
        </View>

        {/* Footer Buttons */}
        <View className="absolute bottom-8 w-full px-4">
          <View className="flex-row justify-between">
            <Pressable className="bg-indigo-950 p-4 rounded-xl flex-1 mr-2 flex-row justify-center items-center">
              <FontAwesome name="gamepad" size={24} color="white" />
              <Text className="text-white text-lg font-[Poppins-Medium] ml-2">
                More Games
              </Text>
            </Pressable>
            <Pressable className="bg-indigo-950 p-4 rounded-xl flex-1 ml-2 flex-row justify-center items-center">
              <FontAwesome name="users" size={24} color="white" />
              <Text className="text-white text-lg font-[Poppins-Medium] ml-2">
                Follow Us
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
