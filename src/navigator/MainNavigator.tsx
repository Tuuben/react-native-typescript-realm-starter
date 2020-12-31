import React from 'react';
import {DarkTheme, NavigationContainer, Theme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '../theme/theme';
import {Icon} from 'react-native-eva-icons';
import HomeNavigator from './HomeNavigator';
import SettingsView from '../views/Settings';

const darkTheme = DarkTheme;
const navTheme: Theme = {
  dark: true,
  colors: {
    ...darkTheme.colors,
    background: theme.palette.primaryHiglight,
    border: theme.palette.white,
  },
};

const Tab = createBottomTabNavigator();

export type NavigationParamList = {
  Home: undefined;
  Settings: undefined;
};

const MainNavigator = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: theme.palette.white,
          style: {backgroundColor: theme.palette.backgroundPrimary},
          tabStyle: {backgroundColor: theme.palette.backgroundPrimary},
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name="home-outline"
                width={size}
                height={size}
                fill={color}
              />
            ),
          }}
          name="Home"
          component={HomeNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name="settings-2-outline"
                width={size}
                height={size}
                fill={color}
              />
            ),
          }}
          name="Settings"
          component={SettingsView}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
