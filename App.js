/** First import gesture handler */
import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SplashScreen } from "expo";
import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation.js";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
// PREBUILT UI
import { withAuthenticator } from "aws-amplify-react-native";
// Load/fetch ratings evaluations and team members
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "./src/graphql/queries";
import * as mutations from "./src/graphql/mutations";

/// https://stackoverflow.com/users/11379945/samim-hakimi
/// https://github.com/samimhakimi/React-Native-Navigation

function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [ratings, setRatings] = useState([{ evaluator: "Samim Hakimi" }]);
  const [evaluationRequests, setEvaluationRequests] = useState([{}]);
  const [teamMembers, setTeamMembers] = useState([
    { name: "App Level", jobTitle: "Founder" },
    { name: "Samim", jobTitle: "developer" },
  ]);

  useEffect(() => {
    // Function to load resources
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        await Font.loadAsync({
          "CooperHewitt-BookItalic": require("./assets/fonts/CooperHewitt-BookItalic.otf"),
          "CooperHewitt-Book": require("./assets/fonts/CooperHewitt-Book.otf"),
          "CooperHewitt-Bold": require("./assets/fonts/CooperHewitt-Bold.otf"),
          "CooperHewitt-Heavy": require("./assets/fonts/CooperHewitt-Heavy.otf"),
          "CooperHewitt-Light": require("./assets/fonts/CooperHewitt-Light.otf"),
          "CooperHewitt-Medium": require("./assets/fonts/CooperHewitt-Medium.otf"),
          "SourceSansPro-It": require("./assets/fonts/SourceSansPro-It.otf"),
          "SourceSansPro-Regular": require("./assets/fonts/SourceSansPro-Regular.otf"),
          "Montserrat-Black": require("./assets/fonts/Montserrat-Black.otf"),
        });

        // TODO: USER first login
        // let currentAuthenticatedUser = await Auth.currentAuthenticatedUser().catch(err => console.log(err));
        // const { attributes } = currentAuthenticatedUser;
        // console.log({attributes});
        // const id = attributes.sub
        // var user = await API.graphql(graphqlOperation(queries.getUser, {id}))
        // const { getUser } = user.data
        // console.log("USERRRR")
        // console.log({user});
        // if (!getUser) {
        //   user = await API.graphql(graphqlOperation(mutations.createUser, { id: id })).catch(err => console.log("error creating a user dummie."))
        //   console.log("USER CREATED")
        // } else {

        //   const allRatings = [];
        //   setRatings(allRatings)

        //   const allEvaluationRequests = await API.graphql(graphqlOperation(queries.listEvaluationRequests));
        //   setEvaluationRequests(allEvaluationRequests)

        //   const allUsers = await API.graphql(graphqlOperation(queries.listUsers));
        //   setTeamMembers(allUsers)
        // }
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
    // Load only once
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigation
            ratings={ratings}
            evaluationRequests={evaluationRequests}
            teamMembers={teamMembers}
          />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0009EE",
  },
});

export default App;
// PREBUILT UI
// export default withAuthenticator(App, false)
