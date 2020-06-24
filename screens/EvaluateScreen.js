import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import EvaluationSlider from "../components/EvaluationSlider";
import Circle from "../components/Circle";
import { SafeAreaView } from "react-native-safe-area-context";

/////
/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation

// TODO: Performance van sliders..
function EvaluateScreen({ navigation }) {
  const skill = {
    name: "Creativity",
    description:
      "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.",
  };
  const [sliders, setSliders] = useState([
    { id: 1, skill: "Out of the box", grade: 60 },
    { id: 2, skill: "Visual skills", grade: 60 },
    { id: 3, skill: "Ideas", grade: 60 },
  ]);
  const [average, setAverage] = useState(6);
  // var average = 6
  const handleChange = (id, value) => {
    var temp = [...sliders];
    temp.map((slider, index) => {
      if (slider.id == id) {
        slider.grade = value;
      }
    });
    setSliders(temp);
    const sum = temp.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.grade;
    }, 0);
    const average = String((sum / temp.length / 10).toFixed(0));
    setAverage(average);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          {/* A JSX comment  TODO: circle */}
          <Circle color={"rgba(239,244,253,0.5)"} />

          <BackButton
            style={styles.back}
            onPress={() => navigation.navigate("Tabs")}
          />
          <View style={styles.header}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <Text style={styles.skillDescription}>{skill.description}</Text>
          </View>
        </View>

        <View style={styles.middle}>
          {sliders.map((item, index) => {
            return (
              <EvaluationSlider
                key={index}
                item={item}
                onSliderChange={handleChange}
              />
            );
          })}
        </View>
        <View style={styles.bottom}>
          <NextButton
            style={styles.next}
            title={"Next"}
            onPress={() =>
              navigation.navigate("EvaluateCommentScreen", {
                skill: skill.name,
                average: average,
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  top: {
    flex: 0.2,
    // backgroundColor: 'grey',
  },
  middle: {
    flex: 0.6,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    flex: 0.15,
    // backgroundColor:'grey',
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignSelf: "center",
  },
  skillName: {
    fontSize: 28,
    alignSelf: "center",
    fontFamily: "CooperHewitt-Bold",
    color: "rgb(10,19,255)",
    padding: 2,
  },
  skillDescription: {
    fontSize: 18,
    alignSelf: "center",
    width: 260,
    fontFamily: "SourceSansPro-Regular",
    color: "rgb(118,118,118)",
  },
  next: {},
  back: {
    // marginLeft: 20,
  },
});

export default EvaluateScreen;
