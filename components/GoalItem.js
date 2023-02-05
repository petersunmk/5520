import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function GoalItem({ goal }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{goal.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    borderRadius: 5,
    backgroundColor: "#888",
    marginVertical: 15,
    padding: 15,
  },
  text: {
    color: "#4510ff",
    fontSize: 30,
  },
});
