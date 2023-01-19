import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";

export default App = () => {
  const name = "CS 5520"; //js variable
  const [enteredText, setEnteredText] = useState("");

  function onTextEnter(changedText) {
    setEnteredText(changedText);
  }

  return (
    <View style={styles.container}>
      <Header appName={name} />
      <StatusBar style="auto" />
      <Input textUpdateFunction={onTextEnter} />
      <Text>{enteredText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
