import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation

export default function Rating({ rating, onSeeDetails }) {
  const translateGradeToColor = (grade) => {
    grade = parseInt(grade);
    if (grade < 5.5) {
      return "#ff100a";
    } else if (grade < 7) {
      return "rgb(255,171,10)";
    } else {
      return "rgb(10,185,255)";
    }
  };
  const gradeColor = translateGradeToColor(rating.grade);
  return (
    <View style={styles.Box}>
      <View style={styles.circleBox}>
        <View style={[styles.circle, { backgroundColor: gradeColor }]}>
          <Text style={styles.grade}>{rating.grade}</Text>
        </View>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{rating.skillName}</Text>
        <Text style={styles.description}>{rating.description}</Text>
        <TouchableOpacity
          onPress={onSeeDetails}
          accessibilityLabel="see rating details"
          style={{ flexDirection: "row", width: 100 }}
        >
          <Text style={styles.seeDetails}>See details</Text>
          <Feather
            name={"chevron-right"}
            color={"rgb(10,19,255)"}
            style={styles.seeDetailsIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  Box: {
    width: width - 40,
    height: 130,
    backgroundColor: "rgb(239, 244, 253)",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 20,
  },
  textBox: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    // height:130,
    width: 205,
  },
  viewDetails: {
    color: "rgb(10, 19, 255)",
    marginRight: 3,
  },
  title: {
    fontFamily: "CooperHewitt-Heavy",
    fontSize: 20,
    height: 20,
    padding: 2,
    color: "#2c2c2c",
  },
  description: {
    width: 193,
    fontFamily: "SourceSansPro-Regular",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#767676",
  },
  seeDetails: {
    fontFamily: "CooperHewitt-Medium",
    fontSize: 14,
    color: "#0a13ff",
    padding: 2,
  },
  seeDetailsIcon: {
    fontSize: 12,
    color: "#0a13ff",
    padding: 2,
  },
  circleBox: {
    alignItems: "center",
    justifyContent: "center",
    height: 130,
    width: 130,
  },
  circle: {
    width: 88,
    height: 88,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 44,
  },
  grade: {
    fontFamily: "CooperHewitt-Heavy",
    fontSize: 24,
    height: 24,
    paddingTop: 2,
    textAlign: "center",
    color: "#fff",
  },
});
