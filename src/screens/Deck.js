import { StyleSheet, Text, View, SafeAreaView ,Image, Pressable, FlatList} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useCallback } from "react";
import DeckCard from "../components/DeckCard";
const Deck = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const deckData = [
    // {
    //   id: 1,
    //   title: "PARTY AND FUN",
    //   isLocked: false,
    //   image: require("../assets/party.png"),
    // },
    // {
    //   id: 2,
    //   title: "PARTY AND FUN",
    //   isLocked: false,
    //   image: require("../assets/party.png"),
    // },
    {
      id: 3,
      title: "Buy",
      isLocked: true,
      image: require("../assets/relationships.png"),
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
            <Text>CHOOSE DECK</Text>
          </View>
          <View className="mt-7 justify-center items-center">
            <FlatList data={deckData} renderItem={renderItems} horizontal scrollEnabled={false} contentContainerStyle={{
              gap:17
            }}/>
          </View>
        </View>

        {/* Package buy */}
        <View></View>

        {/* Filters */}
        <View></View>
      </View>
    </SafeAreaView>
  );
};
export default Deck;

