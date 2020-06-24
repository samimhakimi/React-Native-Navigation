import * as React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import NextButton from "./NextButton";

/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation

export default function EvaluationRequest({ name, jobTitle, navigation }) {
  const due = "21-08-2019";
  const status = undefined || "Awaiting your response";
  return (
    <View style={styles.Box}>
      <View style={styles.circleBox}>
        <Image
          style={styles.image}
          source={require("../assets/images/boris-guntenaar.jpeg")}
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{jobTitle}</Text>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.due}>Due date: {due}</Text>
        <NextButton
          size={40}
          textSize={15}
          title={"Evaluate"}
          onPress={() => navigation.navigate("EvaluateScreen")}
        />
      </View>
    </View>
  );
}
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  Box: {
    width: width - 40,
    height: 171,
    backgroundColor: "rgb(239, 244, 253)",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 20,
  },
  circleBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 130,
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
    width: 205,
  },
  title: {
    fontFamily: "CooperHewitt-Heavy",
    height: 20,
    fontSize: 20,
    padding: 1,
    color: "#2c2c2c",
  },
  description: {
    fontFamily: "SourceSansPro-Regular",
    fontSize: 14,
    color: "rgb(44,44,44)",
  },
  status: {
    fontFamily: "SourceSansPro-It",
    color: "rgb(44,44,44)",
  },
  due: {
    fontFamily: "SourceSansPro-Regular",
    color: "rgb(255,16,10)",
  },
});
