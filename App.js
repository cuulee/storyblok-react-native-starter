import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


import Routes from './routes.js';
import StoryBlokApi from './utilities/storyblok';

export default class App extends React.Component {
  componentDidMount() {
    if(typeof document !== 'undefined' && document.body && document.body.lastElementChild.src.indexOf("app.storyblok") < 0) {
      let script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", "//app.storyblok.com/f/storyblok-latest.js?t=hhsBFdIVr1hMfqSBi1iJeAtt");
      script.setAttribute("async", "");
      script.setAttribute("defer", "");
      document.body.appendChild(script);
   }
  }
  render() {
    return (
      <View style={styles.container}>
        <Routes />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
