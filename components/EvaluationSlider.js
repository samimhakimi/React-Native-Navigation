import React, { Component } from "react";
import { Text, StyleSheet, View, Slider, Dimensions } from "react-native";

/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation
export default class EvaluationSlider extends Component {
  constructor(props) {
    super(props);
    this.change = this.onChange.bind(this);
  }

  onChange(value) {
    this.props.onSliderChange(this.props.item.id, value);
  }

  render() {
    const grade = this.props.item.grade;
    return (
      <View>
        <Text style={styles.skill}>{this.props.item.skill}</Text>
        <Text style={styles.grade}>{String((grade / 10).toFixed(1))}</Text>

        <Slider
          maximumValue={100}
          minimumValue={10}
          // step={1} buggy
          // thumbTintColor="grey"
          // minimumTrackTintColor="black"
          maximumTrackTintColor="rgb(230,230,230)"
          // trackStyle={{height:50}}
          value={grade}
          style={styles.slider}
          onValueChange={this.change}
        />
      </View>
    );
  }
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  slider: {
    width: width * 0.8,
  },
  skill: {
    fontSize: 20,
    fontFamily: "CooperHewitt-Medium",
    padding: 2,
  },
  grade: {
    fontSize: 20,
    alignSelf: "center",
    fontFamily: "CooperHewitt-Heavy",
    padding: 2,
  },
});
