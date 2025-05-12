import React, { useState } from "react";
import { Button, Text, View, StyleSheet} from "react-native";

export default function MyButton() {
  // State to manage the message
  const [message, setMessage] = useState("Hello! Welcome to React Native!");

  // Toggle the message when button is clicked
  const toggleMessage = () => {
    setMessage((prevMessage) => (prevMessage ? "" : "Hello! Welcome to React Native!"));
  };

  return (
    <View>
      <Text style={styles.textStyle}>{message}</Text>
      <Button style={styles.buttonStyle} title="Click to toggle greeting" onPress={toggleMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#6c5',
  },
  buttonStyle:{
    flex: 0.1
  }
});

