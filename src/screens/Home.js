import { StyleSheet, Text, View, SafeAreaView, Image,Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


const {height:HEIGHT,width:WIDTH}=Dimensions.get("screen")
const Home = () => {
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
        <View style={styles.header}>
          <MaterialIcons name="settings" size={34} color="white" />
        </View>
        <View>
          <Text className="text-4xl text-white">Never</Text>
        </View>
      </View>

      {/* Text */}
      <View></View>

      {/*  Buttons*/}

      {/* Footer */}
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    padding: 16,
  },
});

export default Home;
