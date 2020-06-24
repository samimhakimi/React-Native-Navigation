import * as React from "react";
/** Navigation */
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
/** Screens */
import EvaluationsScreen from "../screens/EvaluationsScreen.js";
import MyTeamScreen from "../screens/MyTeamScreen.js";
import RatingsScreen from "../screens/RatingsScreen.js";
import { Dimensions, Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

const width = Dimensions.get("window").width;
function TopTabNavigator({ ratings, evaluationRequests, teamMembers }) {
  // console.log("Tabnavigation")
  // console.log({ratings, evaluationRequests, teamMembers});

  return (
    <Tab.Navigator
      initialRouteName="My Ratings"
      initialLayout={{ width: width }}
      tabBarOptions={{
        activeTintColor: "#fff",

        inactiveTintColor: "rgba(255,255,255,0.7)",
        activeTabStyle: {
          backgroundColor: "red",
        },

        labelStyle: {
          fontSize: 12,
        },

        style: {
          backgroundColor: "#0009EE",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,

          // borderRadius: 20,
          // alignSelf: 'center',
          //  width: width-50,
        },

        indicatorStyle: {
          backgroundColor: "#fff",
          width: 30,
          marginLeft: 15,
        },
      }}
      style={
        {
          // width: width-50,
          // TODO:
          // alignSelf: 'center',
          // backgroundColor: 'black',
        }
      }
    >
      <Tab.Screen
        name="My Ratings"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={
                focused
                  ? {
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: 12,
                      fontFamily: "CooperHewitt-Heavy",
                    }
                  : { color: "#fff", fontSize: 12 }
              }
            >
              My Ratings
            </Text>
          ),
        }}
        component={RatingsScreen}
        ratings={ratings}
      />

      <Tab.Screen
        name="Evaluations"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={
                focused
                  ? {
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: 12,
                      fontFamily: "CooperHewitt-Heavy",
                    }
                  : { color: "#fff", fontSize: 12 }
              }
            >
              Evaluations
            </Text>
          ),
        }}
        component={EvaluationsScreen}
        evaluationRequests={evaluationRequests}
      />
      <Tab.Screen
        name="My team"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={
                focused
                  ? {
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: 12,
                      fontFamily: "CooperHewitt-Heavy",
                    }
                  : { color: "#fff", fontSize: 12 }
              }
            >
              My team
            </Text>
          ),
        }}
        component={MyTeamScreen}
        teamMembers={teamMembers}
      />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;
