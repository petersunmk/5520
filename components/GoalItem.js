import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ goal, onDelete, onGoalItemPressed }) {
  return (
    <Pressable onPress={onGoalItemPressed}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{goal.text}</Text>
        <Button color="black" title="X" onPress={() => onDelete(goal.id)} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    borderRadius: 5,
    backgroundColor: "#888",
    marginVertical: 15,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#4510ff",
    fontSize: 30,
    marginRight: 8,
  },
});
