import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  View,
} from "react-native";

export default class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.change = this.onChange.bind(this);
    this.numberOfLines = this.props.numberOfLines;
  }

  /// https://stackoverflow.com/users/11379945/samim-hakimi
  /// https://github.com/samimhakimi/React-Native-Navigation

  onChange(value) {
    this.props.onChangeText(value);
  }
  // TODO:
  // <KeyboardAvoidingView behavior={'postion' || 'height' || 'padding'}>
  // <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>

  render() {
    return (
      <View>
        <TextInput
          placeholder="Type here..."
          keyboardType={"default"}
          textAlignVertical={"top"}
          multiline={true}
          onChangeText={this.change}
          value={this.props.text}
          style={styles.field}
          numberOfLines={Platform.OS === "ios" ? null : this.numberOfLines}
          minHeight={
            Platform.OS === "ios" && this.numberOfLines
              ? 20 * this.numberOfLines
              : null
          }
          maxHeight={
            Platform.OS === "ios" && this.numberOfLines
              ? 20 * this.numberOfLines
              : null
          }
        />
      </View>
    );
  }
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  field: {
    backgroundColor: "#fff",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    width: width - 40,
    padding: 20,
    fontSize: 20,
    borderRadius: 2,
    paddingTop: 23,
  },
});
