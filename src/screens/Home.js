import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("screen");
const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
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

        {/* Text */}
        <View className="self-center pt-3 gap-3">
          <View>
            <Text className="text-5xl text-green-500 font-[Poppins-Bold] tracking-[-1] text-center">
              NEVER
            </Text>
            <View className="h-[2] w-[100] bg-green-500 -top-4 left-7" />
          </View>
          <View>
            <Text className="text-5xl text-gray-100 font-[Poppins-Bold] tracking-[-1] text-center">
              HAVE I
            </Text>
            <View className="h-[2] w-[80] bg-white -top-4 left-16" />
          </View>
          <View>
            <Text className="text-5xl text-red-400 font-[Poppins-Bold] tracking-[-1] text-center">
              EVER
            </Text>
            <View className="h-[2] w-[80] bg-red-400 -top-4 left-5" />
          </View>
        </View>

        {/*  Buttons*/}
        <View className="self-center justify-center items-center mt-16 gap-10">
          <View>
            <TouchableHighlight onPress={()=>navigation.navigate("Deck")}>
              <View className="flex-row justify-between items-center gap-7 h-[60] w-[250] bg-green-500 rounded-2xl">
                <View className=" justify-center items-center px-4">
                  <Text>
                    <AntDesign name="play" size={27} />
                  </Text>
                </View>
                <View className="justify-center items-center right-32">
                  <Text className="font-[Poppins-SemiBold] text-3xl mt-2">
                    PLAY
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight>
              <View className="flex-row justify-around items-center  h-[60] w-[250] bg-red-500 rounded-2xl">
                <View className=" justify-center items-center">
                  <Text>
                    <FontAwesome name="group" size={24} />
                  </Text>
                </View>
                <View className="justify-center items-center ">
                  <Text className="font-[Poppins-SemiBold] text-3xl mt-2 text-center">
                    MULTIPLAYER
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight>
              <View className="flex-row justify-around items-center  h-[60] w-[250] bg-yellow-400 rounded-2xl">
                <View className=" justify-center items-center">
                  <Text>
                    <FontAwesome6 name="gamepad" size={27} />
                  </Text>
                </View>
                <View className="justify-center items-center ">
                  <Text className="font-[Poppins-SemiBold] text-3xl mt-2">
                    HOW TO PLAY
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        {/* Footer */}
        <View className="flex flex-row mt-36 justify-around">
          <View className="justify-center items-center flex-row">
            <View>
              <Text className="text-white">
                <MaterialIcons name="rocket" size={27} />
              </Text>
            </View>
            <View className="border px-1 py-1  rounded-3xl border-white ">
              <Text className="text-gray-50">FOLLOW US</Text>
            </View>
          </View>

          <View className="flex-row justify-center items-center gap-1">
            <View>
              <Text className="text-white">
                <FontAwesome name="codiepie" size={24} />
              </Text>
            </View>
            <View className="border px-1 py-1  rounded-3xl border-white ">
              <Text className="text-gray-50">MORE GAMES</Text>
            </View>
          </View>
        </View>
      </View>
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
