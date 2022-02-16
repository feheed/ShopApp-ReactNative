import { StyleSheet, View } from "react-native";
import React from "react";
import shopStore from "../../stores/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react-lite";
import { ImageBackground } from "react-native";
const ShopList = ({ navigation }) => {
  const shopitems = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} navigation={navigation} />
  ));
  console.log(shopitems);

  return (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={{
        uri: "https://w0.peakpx.com/wallpaper/333/775/HD-wallpaper-neon-way-amazing-b-beach-beautiful-black-blue-dark-effect-fx-film-fire-flame-fun-green-landscape-light-lightning-meditate-natural-nature-neon-overhead-graphy-red-sand-serene.jpg",
      }}
    >
      <View style={styles.shopDetailWrapper}>{shopitems}</View>
    </ImageBackground>
  );
};
export default observer(ShopList);

const styles = StyleSheet.create({
  shopDetailWrapper: {
    marginTop: 50,
    textAlign: "center",
    alignItems: "center",
  },
  shopDetailImage: {
    width: 150,
    height: 150,
  },
  shopDetailTitle: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
