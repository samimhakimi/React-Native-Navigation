import React, { Fragment } from "react";
import { StyleSheet, ScrollView, StatusBar } from "react-native";
import RatingBox from "../components/RatingBox.js";

function RatingsScreen({ navigation, ratings }) {
  ratings = ratings || [
    {
      skillName: "Creativity",
      grade: "8.1",
      description: "Originality, new ideas, out of the box",
    },
    {
      skillName: "Learning",
      grade: "5.1",
      description: "Originality, new ideas, out of the box",
    },
    {
      skillName: "Teamwork",
      grade: "6.3",
      description: "Originality, new ideas, out of the box",
    },
  ];
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scroll}
      >
        {ratings.map((rating, index) => {
          return (
            <RatingBox
              key={index}
              rating={rating}
              gradeColor="rgb(10,185,255)"
              onSeeDetails={() => {
                navigation.navigate("RatingsDetailsScreen", {
                  rating: rating,
                });
              }}
            />
          );
        })}
      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    // flexGrow: 1,
  },
});

export default RatingsScreen;
