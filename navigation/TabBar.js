
import * as React from "react"
import { View } from "react-native"
import Tab from './Tab'

const TabBar = (props) => {
  const { navigationState, navigation, position } = props
  return (
    <View style={{
      height: 80,
      backgroundColor: 'seashell',
      flexDirection: "row",
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
    {navigationState.routes.map((route, index) => {
      const focusAnim = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 0]
      })
      return (
        <Tab 
          focusAnim={focusAnim}
          title={route.routeName} 
          onPress={() => navigation.navigate(route.routeName)}
        />
      )
    })}
    </View>
  )
}

export default TabBar