import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const Deck = () => {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <Text>Deck</Text>
    </View>
  );
};
export default Deck;
const styles = StyleSheet.create({});
