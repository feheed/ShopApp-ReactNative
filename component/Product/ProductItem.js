import { Text } from "react-native";
import { baseURL } from "../../stores/api";
import React from "react";
const ProductItem = ({ product }) => {
  return (
    <HStack w="100%">
      <Image
        source={{
          uri: baseURL + product.image,
        }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{product.name}</Text>
    </HStack>
  );
};
export default ProductItem;
