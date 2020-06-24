import React, { Fragment } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NextButton from "../components/NextButton";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation

class SettingsScreen extends React.Component {
  state = {
    username: "Samim",
    jobTitle: "Hakimi",
    photo: null,
  };

  handlePhotoUpload = () => {
    const options = {
      noData: true,
    };

    ImagePicker.launchImageLibraryAsync(options, (response) => {
      console.log({ response });
      if (response.cancelled) {
        return;
      }

      if (response.uri) {
        this.setState({ photo: response });
      }
    })
      .then((response) => {
        console.log("response");
        console.log(response);
        if (response.cancelled) {
          return;
        }

        if (response.uri) {
          this.setState({ photo: response });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { username, jobTitle, photo } = this.state;
    return (
      <ScrollView style={styles.safe}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <View style={styles.top}>
            <Image
              style={styles.image}
              source={
                (photo && { uri: photo.uri }) ||
                require("../assets/images/Samim.png")
              }
            />

            <TouchableOpacity onPress={this.handlePhotoUpload}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.middle}>
            <TextInput
              style={styles.input}
              clearTextOnFocus={true}
              onChangeText={(text) => this.setState({ username: text })}
              value={username}
              placeholder={"username"}
            />
            <TextInput
              style={styles.input}
              clearTextOnFocus={true}
              onChangeText={(text) => this.setState({ jobTitle: text })}
              value={jobTitle}
              placeholder={"job title"}
            />
          </View>
          <View style={styles.bottom}>
            <NextButton title="Submit" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const imageSize = 130;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  safe: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    height: 0.3 * height,
    // backgroundColor: 'red',
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: "lightgrey",
  },
  edit: {
    color: "blue",
    fontSize: 20,
  },
  middle: {
    paddingTop: 50,
    height: 0.5 * height,
    // backgroundColor: 'blue',
    width: width - 40,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 0,
  },
  bottom: {
    height: 0.15 * height,
    // backgroundColor: 'grey',
  },
});

export default SettingsScreen;
