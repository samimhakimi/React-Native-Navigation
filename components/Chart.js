import React from "react";
import { StyleSheet, Dimensions } from "react-native";
// import { LineChart } from 'expo-chart-kit'
import LineChart from "./LineChart.js";
// legend: ["Rainy Days", "Sunny Days", "Snowy Days"],
/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation
function Chart() {
  return (
    <LineChart
      data={{
        labels: ["1.10.2017", "", "", "", "", "1.10.2018"],
        datasets: [
          {
            data: [
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
            ],
          },
        ],
      }}
      width={Dimensions.get("window").width - 50} // from react-native
      height={200}
      chartConfig={{
        strokeWidth: 5,
        backgroundColor: "#fff",
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff", // TODO: for visiblity purpose
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 0) => `rgb(10, 19, 255)`,
        style: {
          color: "#fff",
        },
      }}
      bezier
      style={{
        // marginVertiscal: 8,
        // alignSelf: 'center',
        // paddingTop: 50,
        borderRadius: 16,
        width: Dimensions.get("window").width - 40,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 15,
      }}
      // yAxis:{
      //   drawGridLines: false,
      //   gridDashedLine: {spaceLength:0}
      // },
    />
  );
}

const styles = StyleSheet.create({});

export default Chart;
