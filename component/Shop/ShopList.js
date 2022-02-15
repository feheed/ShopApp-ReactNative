import { StyleSheet, Text, View } from "react-native";
import React from "react";
import shopStore from "../../stores/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react-lite";

const ShopList = () => {
  const shopitems = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} />
  ));
  console.log(shopitems);

  return <View>{shopitems}</View>;
};

export default observer(ShopList);

const styles = StyleSheet.create({});
