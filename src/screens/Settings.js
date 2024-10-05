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
        <View className="flex-row justify-between px-3">
          <MaterialIcons name="settings" size={34} color="white" />
          <AntDesign name="infocirlce" size={32} color="white" />
        </View>
      </View>

      {/* Choose deck */}
    </SafeAreaView>
  );
};
export default Settings;
const styles = StyleSheet.create({});
