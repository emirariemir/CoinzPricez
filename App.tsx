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
      <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Welcome to CoinzPricez!</Text>
        <Text style={styles.description}>An app that will tell you your favorite crypto coin prices.</Text>
      </View>
      <View style={styles.coinButtonsView}>
        <View style={styles.coinButton}>
          <Text>Show me BTC/USD Price</Text>
        </View>
        <View style={styles.coinButton}>
          <Text>Show me ETH/USD Price</Text>
        </View>
        <View style={styles.coinButton}>
          <Text>Show me SOL/USD Price</Text>
        </View>
      </View>
      <View style={styles.refreshButton}>
        <Text style={styles.refreshText}>Refresh Data</Text>
      </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darker,
  },
  safeAreaView: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  titleView: {
  },
  title: {
    color: Colors.white,
    fontWeight: '800',
    fontSize: 24,
  },
  description: {
    color: Colors.white,
  },
  coinButtonsView: {
    marginVertical: 15,
  },
  coinButton: {
    backgroundColor: Colors.white,
    padding: 15,
    marginVertical: 7,
    borderRadius: 8,
  },
  refreshButton: {
    backgroundColor: '#0066FF',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 99,
  },
  refreshText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  }
});

export default App;
