import React from "react";
import { View } from "react-native";

const WhiteCircle = ({ color }) => {
  color = color || "rgba(239, 244, 253, 0.2)";
  const size = 300;
  return (
    <View
      style={{
        position: "absolute",
        top: -size / 2,
        left: size / 5,
        height: size,
        width: size,
        borderRadius: size / 2,
        backgroundColor: color,
        zIndex: -3,
      }}
    ></View>
  );
};

export default WhiteCircle;
