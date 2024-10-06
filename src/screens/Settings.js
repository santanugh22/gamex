import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
const Settings = () => {
  const insets = useSafeAreaInsets();
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
        <View className="flex-row justify-between py-2  bg-indigo-950 items-center">
          <View className="px-6">
            <MaterialIcons name="settings" size={34} color="white" />
          </View>
          <View className="justify-center items-center py-1 mt-2 right-32">
            <Text className="text-4xl font-[Poppins-Bold] text-white">
              Settings
            </Text>
          </View>
        </View>

        {/* Music and info option */}
        <View>
          <View>
            <Text></Text>
          </View>
          <View></View>
        </View>

        {/* Buttons */}
        <View>
          <View className="w-[] bg-green-400 h-[80] rounded-xl">

          </View>
        </View>

        {/* Footer */}
        <View></View>
      </View>

      {/* Choose deck */}
    </SafeAreaView>
  );
};
export default Settings;
const styles = StyleSheet.create({});
