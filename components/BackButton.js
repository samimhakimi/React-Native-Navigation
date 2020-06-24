import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation

function BackButton({ onPress, color, size }) {
  color = color || { backgroundColor: "#0009EE", iconColor: "#fff" };
  const backgroundColor = color.backgroundColor || "#0009EE";
  const iconColor = color.iconColor || "#fff";
  size = size || 50;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          height: size,
          width: size,
          borderRadius: size / 2,
        },
      ]}
      onPress={onPress}
      underlayColor="#fff"
    >
      <Ionicons
        name={"md-arrow-back"}
        color={"#fff"}
        onPress={onPress}
        style={{ color: iconColor, fontSize: size / 2 }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BackButton;
