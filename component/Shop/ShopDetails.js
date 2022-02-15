import React from "react";
import shopStore from "../stores/shopStore";
const ShopDetail = () => {
  const shop = shopStore.shops[0];
  return (
    <View>
      <Image source={{ uri: baseURL + shop.image }} />
      <Text>{shop.name}</Text>
      <ProductsList products={shop.products} />
    </View>
  );
};
export default ShopDetail;
