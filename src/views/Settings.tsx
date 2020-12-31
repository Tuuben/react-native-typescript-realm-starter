import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationParamList} from '../navigator/MainNavigator';

import {theme} from '../theme/theme';

export type SettingsViewProps = {
  navigation: StackNavigationProp<NavigationParamList, 'Home'>;
  route: RouteProp<NavigationParamList, 'Home'>;
};

const SettingsView = ({navigation, route}: SettingsViewProps) => {
  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <Text style={style.title}>Hypothetical settings view</Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.palette.backgroundPrimary,
  },
  container: {
    minHeight: '100%',
    backgroundColor: theme.palette.backgroundPrimary,
    padding: theme.spacing.space32,
  },
  title: {
    fontSize: theme.typography.large,
    color: theme.palette.white,
  },
});

export default SettingsView;
