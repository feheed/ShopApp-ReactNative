import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";
import { baseURL } from "../../stores/api";

const ShopItem = ({ shop, navigation }) => {
  console.log(shop);
  console.log(shop.image);
  return (
    <Pressable onPress={() => navigation.navigate("Details")}>
      <View>
        <Text style={styles.shopDetailTitle}>{shop.name}</Text>
        <Image
          style={{ height: 100, width: 100 }}
          source={{ uri: baseURL + shop.image }}
        />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  shopDetailWrapper: {
    marginTop: 50,
  },
  shopDetailImage: {
    width: 150,
    height: 150,
  },
  shopDetailTitle: {
    fontWeight: "bold",
    fontSize: 40,
  },
  namesOfShops: {},
});

export default ShopItem;
