import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../Shop/ShopList";
import ShopDetails from "../Shop/ShopDetails";
import React from "react";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Shop" component={ShopList} />
      <Screen name="Details" component={ShopDetails} />
    </Navigator>
  );
};

export default StackNavigator;
