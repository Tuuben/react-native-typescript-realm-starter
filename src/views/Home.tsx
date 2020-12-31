import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationParamList} from '../navigator/MainNavigator';
import {theme} from '../theme/theme';

export type HomeViewProps = {};

export type HomeNavigatorProps = {
  navigation: StackNavigationProp<NavigationParamList, 'Home'>;
  route: RouteProp<NavigationParamList, 'Home'>;
};

const HomeView = ({navigation, route}: HomeNavigatorProps) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.sectionTitle}>React starter template</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: theme.palette.backgroundPrimary,
    height: '100%',
  },
  safeArea: {
    backgroundColor: theme.palette.backgroundPrimary,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: theme.palette.backgroundPrimary,
    height: '100%',
    padding: theme.spacing.space32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.palette.white,
  },
});

export default HomeView;
