import React, { Fragment, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Modal,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import TeamMember from "../components/TeamMember";
import NextButton from "../components/NextButton";

/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation

function MyTeamScreen({ navigation, teamMembers }) {
  const [modalVisible, setModalVisible] = useState(false);
  const subText =
    "Donec facilisis tortor ut augue lacinia, at viverra est semper.\
  Sed sapien metus, scelerisque nec pharetra id, tempor.";
  // TODO:
  // const [teamMembers, setMembers] = useState([{ name:"TeamScreem", jobTitle:'Founder'}, { name:'Thomas', jobTitle:'developer' }])
  teamMembers = teamMembers || [
    { name: "TeamScreen", jobTitle: "Founder" },
    { name: "Samim", jobTitle: "developer" },
  ];
  return (
    <Fragment>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Image
              style={styles.image}
              source={require("../assets/images/group2.png")}
            />

            <Text style={styles.text}>Invitation sent!</Text>
            <Text style={styles.subText}>{subText}</Text>

            <NextButton
              title="Ok"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </Modal>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scroll}
      >
        {teamMembers.map((item, index) => (
          <TeamMember
            name={item.name}
            key={index}
            jobTitle={item.jobTitle}
            picture={item.picture}
            navigation={navigation}
            onPress={setModalVisible}
          />
        ))}
      </ScrollView>
    </Fragment>
  );
}

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

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
  modalContainer: {
    backgroundColor: "rgba(51,51,51,0.8)",
    color: "#fff",
    textDecorationColor: "#fff",
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: 288,
    width: width - 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontFamily: "CooperHewitt-Heavy",
    color: "rgb(44,44,44)",
    fontSize: 24,
  },
  subText: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 14,
    fontFamily: "SourceSansPro-Regular", // TODO: SUPER LIGHT
  },
});

export default MyTeamScreen;
