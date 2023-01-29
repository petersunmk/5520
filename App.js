import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";

export default App = () => {
  const name = "CS 5520"; //js variable
  const [enteredText, setEnteredText] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  function onTextEnter(changedText) {
    setEnteredText(changedText);
    setModalVisible(false);
  }
  function onCancel() {
    setModalVisible(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topContainer}>
        <Header appName={name} />
        <Button title="Add task" onPress={() => setModalVisible(true)} />
      </View>

      <Input
        modalIsVisible={modalVisible}
        textUpdateFunction={onTextEnter}
        onCancel={onCancel}
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.text}>{enteredText}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },

  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
  },

  text: {
    color: "#4510ff",
    fontSize: 18,
  },
});
