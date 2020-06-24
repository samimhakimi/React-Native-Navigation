import React, { Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import BackButton from "../components/BackButton";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Circle from "../components/Circle";
import RatingDetails from "../components/RatingDetails";
import Chart from "../components/Chart";
import { isIphoneX } from "../constants/Utils";

/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation

// <SafeAreaView style={styles.safe}/>
function RatingsDetailsScreen({ navigation, route }) {
  const grade = route.params.rating.grade || 8.1;
  const title = route.params.rating.skillName || "Error";
  const description =
    route.params.rating.description || "new ideas, out of the box";
  // TODO: useEffect -> get individual ratings
  const ratings = [
    {
      evaluator: { name: "Boris Guntenaar", jobTitle: "Accountant" },
      rating: {
        grade: "9.5",
        comment: "This is my comment on this skill. You did a great job.",
      },
    },
    {
      evaluator: { name: "Thomas Guntenaar", jobTitle: "Developer" },
      rating: {
        grade: "8.5",
        comment: "This is my comment on this skill. You did a great job.",
      },
    },
    {
      evaluator: { name: "Olivier Guntenaar", jobTitle: "Developer" },
      rating: {
        grade: "7.5",
        comment: "This is my comment on this skill. You did a great job.",
      },
    },
  ];
  // <SafeAreaView style={styles.safe}/>
  return (
    <Fragment>
      <SafeAreaView style={styles.safe} />
      <View style={styles.container} contentContainerStyle={styles.scroll}>
        <View style={styles.top}>
          <LinearGradient
            colors={["rgb(10,185,255)", "rgb(10,19,255)"]}
            style={styles.header}
          >
            <Circle />
            <View style={styles.topNavigation}>
              <BackButton
                color={{ backgroundColor: "#fff", iconColor: "rgb(44,44,44)" }}
                size={25}
                onPress={() => navigation.navigate("Tabs")}
              />
              <Feather
                name={"settings"}
                color={"#fff"}
                onPress={() => {
                  navigation.navigate("SettingsScreen");
                }}
                style={styles.settingsIcon}
              />
            </View>
            <View style={styles.middleNavigation}>
              <View style={styles.bigRing}>
                <LinearGradient
                  colors={["rgba(10,185,255, 0.99)", "rgb(10,19,255)"]}
                  style={styles.mediumRing}
                >
                  <View style={styles.smallRing}>
                    <Text style={styles.grade}>{grade}</Text>
                  </View>
                </LinearGradient>
              </View>
              <View style={styles.middleNavigationInner}>
                <Text style={styles.skill}>{title}</Text>
                <Text style={styles.skillDescription}>{description}</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.middle}>
          <View style={styles.chart}>
            <Chart />
          </View>
        </View>
        <View style={styles.bottom}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.date}>October 2019</Text>
            {ratings.map(function (item, index) {
              return (
                <RatingDetails
                  key={index}
                  item={item}
                  onViewDetails={() =>
                    navigation.navigate("DetailedRatingScreen", {
                      evaluator: {
                        name: "Boris Guntenaar",
                        jobTitle: "Owner FlexInHouse",
                      },
                      skill: "Creativity",
                      description:
                        "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.",
                      subSkills: [
                        {
                          name: "Out of the Box",
                          description:
                            "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.",
                          grade: 3,
                        },
                        {
                          name: "Visual Skills",
                          description:
                            "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.",
                          grade: 8,
                        },
                        {
                          name: "Ideas",
                          description:
                            "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.",
                          grade: 6,
                        },
                      ],
                    })
                  }
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
      <SafeAreaView style={styles.safe2} />
    </Fragment>
  );
}
// <SafeAreaView style={styles.safe2}/>

const window = Dimensions.get("window");
const height = window.height;
const width = window.width;
const circleSize = 70;
const mediumRingSize = circleSize + 12;
const bigRingSize = circleSize + 20;

const styles = StyleSheet.create({
  safe: {
    flex: 0,
    paddingTop: isIphoneX() ? 0 : 20,
    backgroundColor: "rgb(10,185,255)",
  },
  safe2: {
    flex: 0,
    backgroundColor: "#fff",
    paddingTop: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: width,
  },
  top: {
    flex: 0.25,
    backgroundColor: "rgb(10,19,255)",
  },
  header: {
    flex: 1,
  },
  middle: {
    width: width,
    flex: 0.25,
    top: -0.04 * height,
    alignSelf: "center",
  },
  chart: {
    alignSelf: "center",
  },
  date: {
    alignSelf: "flex-start",
    justifyContent: "space-between",
    fontFamily: "SourceSansPro-Regular",
    color: "rgb(10,19,255)",
    marginLeft: 10,
  },
  bottom: {
    flex: 0.45,
  },
  scroll: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  bigRing: {
    backgroundColor: "#fff",
    height: bigRingSize,
    width: bigRingSize,
    borderRadius: bigRingSize / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  mediumRing: {
    backgroundColor: "white",
    height: mediumRingSize,
    width: mediumRingSize,
    borderRadius: mediumRingSize / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  smallRing: {
    backgroundColor: "#fff",
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  grade: {
    color: "black",
    fontSize: 25,
    fontFamily: "CooperHewitt-Heavy",
    paddingTop: 2,
    height: 25,
  },
  skill: {
    color: "#fff",
    fontSize: 24,
    height: 24,
    fontFamily: "CooperHewitt-Heavy",
    padding: 2,
  },
  skillDescription: {
    color: "#fff",
    fontSize: 16,
    padding: 2,
    fontFamily: "SourceSansPro-It",
  },
  topNavigation: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  middleNavigation: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 21,
    paddingTop: 10,
  },
  middleNavigationInner: {
    marginLeft: 20,
    marginTop: 20,
  },
  settingsIcon: {
    fontSize: 25,
    marginTop: 10,
    marginRight: 15,
  },
});

export default RatingsDetailsScreen;
