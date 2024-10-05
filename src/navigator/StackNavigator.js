import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import Home from "../screens/Home";
import Deck from "../screens/Deck";
import Settings from "../screens/Settings";
const Stack = createStackNavigator();
const StackNavigator = () => {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Deck} />
        <Stack.Screen name="Profile" component={Settings} />
    </Stack.Navigator>
  </NavigationContainer>;
};
export default StackNavigator;
const styles = StyleSheet.create({});
