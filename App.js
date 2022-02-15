import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ShopList from "./component/Shop/ShopList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello! sir</Text>
      <ShopList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
