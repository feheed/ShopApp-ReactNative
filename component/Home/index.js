import { View } from "react-native";
import React from "react";
import { NativeBaseProvider, Text, Image, Button } from "native-base";
const Home = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View>
        <Text>Home way</Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80",
          }}
          style={{ width: 100, height: 100 }}
        />
        <Button
          onPress={() => {
            alert("Close me");
          }}
        >
          Open me
        </Button>
        <Button
          backgroundColor={"black"}
          onPress={() => navigation.navigate("Shop")}
        >
          Click here to skip
        </Button>
      </View>
    </NativeBaseProvider>
  );
};

export default Home;
