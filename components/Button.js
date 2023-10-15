import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

// Komponen Button dengan props yang menerima argumen onPress dan text
const Button = (props) => {
  return (
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
  );
};

// styling untuk mengatur layout/desain dari button
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddddd",
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Button;
