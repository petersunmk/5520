import { View, Text, TextInput } from "react-native";
import { useState } from "react";

export default function Input({ textUpdateFunction }) {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={{ backgroundColor: "red" }}
        value={text}
        onChangeText={(changedText) => {
          textUpdateFunction(changedText);
          setText(changedText);
        }}
      />
    </View>
  );
}
