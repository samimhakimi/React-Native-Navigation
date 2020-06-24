import * as React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import NextButton from "./NextButton";

export default function TeamMember({ name, jobTitle, onPress }) {
  const handlePress = () => {
    onPress(true);
  };
  return (
    <View style={styles.Box}>
      <View style={styles.circleBox}>
        <Image
          style={styles.image}
          source={require("../assets/images/Samim.png")}
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{jobTitle}</Text>
        <NextButton
          size={45}
          textSize={15}
          title={"Request evaluation"}
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  Box: {
    width: width - 40,
    height: 0.4 * (width - 40),
    backgroundColor: "rgb(239, 244, 253)",
    borderRadius: 7,
    flexDirection: "row",
    marginBottom: 20,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 44,
  },
  textBox: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontFamily: "CooperHewitt-Heavy",
    fontSize: 20,
    height: 20,
    padding: 1,
    fontStyle: "normal",
    color: "#2c2c2c",
  },
  description: {
    fontFamily: "SourceSansPro-Regular",
    fontSize: 14,
    color: "rgb(44,44,44)",
  },
  circleBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 130,
  },
  circle: {
    width: 88,
    height: 88,
    borderRadius: 44,
  },
});
