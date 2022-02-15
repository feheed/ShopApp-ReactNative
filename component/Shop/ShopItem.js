import { Image, Text, View } from "react-native";
import React from "react";
import { baseURL } from "../../stores/api";

const ShopItem = ({ shop }) => {
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

export default ShopItem;
