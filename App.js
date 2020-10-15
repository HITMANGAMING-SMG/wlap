import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import TransactionScreen from "./Screens/TransactionScreen";
import SearchScreen from "./Screens/SearchScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Working!!</Text>
        <AppContainer />
      </View>
    );
  }
}

const tabNavigator = createBottomTabNavigator({
  Transaction: { screen: TransactionScreen },
  Search: { screen: SearchScreen },
});

const AppContainer = createAppContainer(tabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
