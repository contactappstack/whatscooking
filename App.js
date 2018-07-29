import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import Router from './navigation/Router';
//import { Provider } from 'react-redux'

//import store from './store'
export default class App extends React.Component {

  render() {
    
    return (
        <View style={styles.container}>
        {Platform.OS==='android' && (
        <View style={{
          height : Expo.Constants.statusBarHeight,
          backgroundColor : 'black',
        }} />
        )}
          <Router />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
