/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { PropsWithChildren, useEffect, useState } from 'react';

import { watchEvents, sendMessage } from 'react-native-watch-connectivity';

import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type CoinButtonProps = PropsWithChildren <{
  coinTitle: string;
}>;

type RefreshButtonProps = PropsWithChildren <{
  buttonTitle: string;
}>;

type WatchMessage = PropsWithChildren <{
  watchMessage: string;
}>;

function sendPrice({watchMessage}: WatchMessage) {
  sendMessage({messageFromApp: watchMessage}, reply => {console.log(reply)}, error => { 
    if (error) { 
      Alert.alert("A major problem occured.")
    }
  });
}

function CoinButton({coinTitle}: CoinButtonProps): React.JSX.Element {
  const sendPriceWithMessage = () => sendPrice({ watchMessage: `Price of ${coinTitle}/USD` });

  return (
    <TouchableOpacity onPress={sendPriceWithMessage}>
      <View style={styles.coinButton}>
        <Text>Show me {coinTitle}/USD price on my watch.</Text>
      </View>
    </TouchableOpacity>
  );
}

function RefreshButton({buttonTitle}: RefreshButtonProps): React.JSX.Element {
  return (
    <TouchableOpacity>
      <View style={styles.refreshButton}>
        <Text style={styles.refreshText}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

function App(): React.JSX.Element {
  const [messageFromWatch, setMessageFromWatch] = useState("Waiting...");
  const [message, setMessage] = useState("");

  type Message = PropsWithChildren <{
    watchMessage: string;
  }>;

  const messageListener = () => watchEvents.on('message', (message: Message) => {
    setMessageFromWatch(message.watchMessage)
  })
  useEffect(() => {
      messageListener()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Welcome to CoinzPricez!</Text>
        <Text style={styles.description}>An app that will tell you your favorite crypto coin prices.</Text>
      </View>
      <View style={styles.coinButtonsView}>
        <CoinButton coinTitle='BTC'/>
        <CoinButton coinTitle='ETH'/>
        <CoinButton coinTitle='SOL'/>
      </View>
      <RefreshButton buttonTitle='Refresh Data'/>
      <Text style={styles.description}>The watch sent you {messageFromWatch} hearts!</Text>
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
