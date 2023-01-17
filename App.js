import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  const [text, setText] = useState();

  return (
    <View style={styles.container}>
      <Header name="CS 5520" />
      <StatusBar style="auto" />
      <TextInput
        style={{ backgroundColor: "red" }}
        //value={text}
        onChangeText={(changeText) => {
          setText(changeText);
        }}
      />
      <Text>{text}</Text>
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
