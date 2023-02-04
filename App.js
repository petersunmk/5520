import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  scrollView,
  GoalItem,
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
        {/* <GoalItem /> */}
        <Header appName={name} />
        <Button title="Add task" onPress={() => setModalVisible(true)} />
      </View>

      <Input
        modalIsVisible={modalVisible}
        textUpdateFunction={onTextEnter}
        onCancel={onCancel}
      />

      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{enteredText}</Text>
        </View>
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
  scrollView: {},
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
    alignItems: "center",
  },

  textContainer: {
    borderRadius: 10,
    backgroundColor: "#888",
  },

  text: {
    color: "#4510ff",
    fontSize: 18,
  },
});
