import { StyleSheet, Text, View, Dimensions,Image } from "react-native";
const { height: HEIGHT, width: WIDTH } = Dimensions.get("screen");
const DeckCard = ({ card }) => {
  return (
    <View style={styles.mainContainer} className="bg-red-500  rounded-3xl overflow-hidden">
      <View></View>
      <View>
        <View>
            <Image source={card.image} className="h-10 w-10"/>
        </View>
        <View>
            <Text>
                {card.title}
            </Text>
        </View>
      </View>
    </View>
  );
};
export default DeckCard;
const styles = StyleSheet.create({
  mainContainer: {
    width: WIDTH * 0.27,
    height: HEIGHT * 0.16,
  },
});
