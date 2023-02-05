import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import GoalItem from "./components/GoalItem";

export default App = () => {
  const name = "CS 5520"; //js variable
  // const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  function onTextEnter(changedText) {
    // setEnteredText(changedText);
    let newGoals = { text: changedText, id: Math.random() };
    setGoals((prevGoals) => [...prevGoals, newGoals]);
    setModalVisible(false);
  }
  function onCancel() {
    setModalVisible(false);
  }

  function onDeletePressed(id) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
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
        {/* <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
          {goals.map((goal) => {
            return (
              <View key={goal.id} style={styles.textContainer}>
                <Text style={styles.text}>{goal.text}</Text>
              </View>
            );
          })}
        </ScrollView> */}
        <FlatList
          contentContainerStyle={styles.scrollViewContentContainer}
          data={goals}
          renderItem={({ item }) => {
            return <GoalItem goal={item} onDelete={onDeletePressed} />;
          }}
        />
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
  },
  scrollViewContentContainer: {
    alignItems: "center",
  },

  textContainer: {
    borderRadius: 10,
    backgroundColor: "#888",
    marginVertical: 15,
    padding: 10,
  },

  text: {
    color: "#4510ff",
    fontSize: 30,
  },
});
