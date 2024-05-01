/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Text style={styles.title}>Welcome to CoinzPricez!</Text>
        <Text style={styles.description}>An app that will tell you your favorite crypto coin prices.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darker,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.white,
    fontWeight: '800',
    fontSize: 24,
  },
  description: {
    color: Colors.white,
  },
});

export default App;
