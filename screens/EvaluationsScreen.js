import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import EvaluationRequest from "../components/EvaluationRequest";

////

/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation

function EvaluationsScreen({ navigation, evaluationRequests }) {
  evaluationRequests = evaluationRequests || [
    { name: "Joghn Rk", jobTitle: "Founder" },
    { name: "Samim Hakimi", jobTitle: "Developer" },
    { name: "Samim Hakimi", jobTitle: "Developer" },
  ];
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      {evaluationRequests.map(function (item, index) {
        return (
          <EvaluationRequest
            key={index}
            name={item.name}
            jobTitle={item.jobTitle}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default EvaluationsScreen;
