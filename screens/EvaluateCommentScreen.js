import React, { Fragment, useState } from "react";
import { Text, View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import CommentInput from "../components/CommentInput";
import { isIphoneX } from "../constants/Utils";

/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation

//https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
export default function EvaluateCommentScreen({ navigation, route }) {
  const [text, setText] = useState("");
  const { skill } = route.params || "Test";
  const { average } = route.params || 8;
  const handleText = (txt) => {
    setText(txt);
  };

  const uploadEvaluation = () => {
    // mutate
    // text
    // route.params.skills
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.safeTop} />
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <LinearGradient
          colors={["rgba(10,185,255, 0.99)", "rgb(10,19,255)"]}
          style={styles.linearGradient}
        />
        <View style={styles.container}>
          <View style={styles.top}>
            <BackButton
              color={{ backgroundColor: "#fff", iconColor: "rgb(44,44,44)" }}
              onPress={() => navigation.navigate("EvaluateScreen")}
            />
            <View styles={styles.header}>
              <Text style={[styles.text, styles.header, { fontSize: 26 }]}>
                {skill}
              </Text>
              <Text style={[styles.text, styles.header, { fontSize: 18 }]}>
                Your average:
              </Text>
              <Text style={[styles.text, styles.header, styles.grade]}>
                {average}
              </Text>
            </View>
          </View>
          <ScrollView
            style={styles.middle}
            contentContainerStyle={styles.scroll}
          >
            <Text style={[styles.text, styles.question]}>Any feedback?</Text>
            <CommentInput
              style={styles.input}
              numberOfLines={7}
              onChangeText={handleText}
              text={text}
            />
          </ScrollView>
          <View style={styles.bottom}>
            <NextButton
              title={"Next"}
              color={{ backgroundColor: "#fff", textColor: "rgb(44,44,44)" }}
              onPress={() => navigation.navigate("Tabs")}
            />
          </View>
        </View>
      </View>
      <SafeAreaView style={styles.safe} />
    </Fragment>
  );
}

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  safeTop: {
    backgroundColor: "rgb(10,185,255)",
    flex: 0,
    paddingTop: isIphoneX() ? 0 : 20,
  },
  safe: {
    flex: 0,
    backgroundColor: "rgb(10,19,255)",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    backgroundColor: "rgb(10,19,255)",
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: height / 2,
  },
  container: {
    // flex: 1,
    // width:width,
    justifyContent: "space-between",
  },
  top: {
    flex: 0.2,
    // flexDirection: 'row',
    width: width,
  },
  middle: {
    flex: 0.6,
    // alignItems: 'center'
    alignSelf: "center",
  },
  scroll: {
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: {
    // alignSelf: 'center'
  },
  bottom: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    padding: 2,
    // alignSelf: 'center',
    fontFamily: "CooperHewitt-Book",
  },
  grade: {
    fontFamily: "CooperHewitt-Heavy",
    fontSize: 60,
    height: 60,
  },
  question: {
    fontFamily: "SourceSansPro-Regular",
    fontSize: 20,
    marginBottom: 20,
  },
  header: {
    alignSelf: "center",
  },
});
