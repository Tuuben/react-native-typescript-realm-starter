import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeView from '../views/Home';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{headerShown: false}}
      />
      {/* Add sub routes here */}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
