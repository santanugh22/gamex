import { StyleSheet, Text, View, SafeAreaView ,Image, Pressable, FlatList, ImageBackground} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FonAwesome from "@expo/vector-icons/FontAwesome";
import { useCallback } from "react";
import DeckCard from "../components/DeckCard";
const Deck = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

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


  const renderItems=useCallback(({item})=>{
    return <DeckCard card={item}/>

  },[])
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
        <ImageBackground source={require("../assets/curvybg.png")} style={{
          height:150,
          width:420,
          borderRadius:30,
          overflow:'hidden',
          alignSelf:"center"
        }}>
         
            <View className="flex-row">
              <View className="justify-center items-center h-full w-1/3 top-5">
                <Text>
                  <FonAwesome name="lock" size={44} color="black" />
                </Text>
              </View>
              <View>
                <View>
                  <Text>
                    Explore 
                  </Text>
                  <Text>
                    PREMIUM DECKS
                  </Text>
                </View>
                <View>
                  
                </View>
              </View>
              <View></View>
            </View>

        </ImageBackground>

        {/* Filters */}
        <View></View>
      </View>
    </SafeAreaView>
  );
};
export default Deck;

