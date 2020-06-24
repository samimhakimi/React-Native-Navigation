import * as React from 'react';
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
} from '@react-navigation/native';

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) {
  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  });

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <View style={[{ flexDirection: 'row' }, tabBarStyle]}>
        {state.routes.map(route => (
          <TouchableOpacity
            key={route.key}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!event.defaultPrevented) {
                navigation.dispatch({
                  ...TabActions.jumpTo(route.name),
                  target: state.key,
                });
              }
            }}
            style={{ flex: 1 }}
          >
            <Text>{descriptors[route.key].options.title || route.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[{ flex: 1 }, contentStyle]}>
        {descriptors[state.routes[state.index].key].render()}
      </View>
    </NavigationHelpersContext.Provider>
  );
}