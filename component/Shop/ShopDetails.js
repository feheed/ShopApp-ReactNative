import React from "react";
import { View, Image, Text } from "react-native";
import shopStore from "../../stores/shopStore";
import { baseURL } from "../../stores/api";
const ShopDetail = () => {
  const shop = shopStore.shops[1];
  console.log(shop);
  console.log(baseURL + shop.image);
  return (
    <View>
      <Text>{shop.name}</Text>
      <Image
        style={{ height: 100, width: 100 }}
        source={{ uri: baseURL + shop.image }}
      />
    </View>
  );
};
export default ShopDetail;
