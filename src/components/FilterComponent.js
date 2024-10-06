import { StyleSheet, Text, View, Dimensions, } from "react-native";
import Animated from "react-native-reanimated";
const { height: HEIGHT, width: WIDTH } = Dimensions.get("screen");
const FilterComponent = () => {
  return (
    <Animated.View>
      <Text>FilterComponent</Text>
    </Animated.View>
  );
};
export default FilterComponent;
const styles = StyleSheet.create({});
