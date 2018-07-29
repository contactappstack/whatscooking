import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import Router from './navigation/Router';
import {AppLoading,Font} from 'expo';
//import { Provider } from 'react-redux'

//import store from './store'

export default class App extends React.Component {

  state = { fontsAreLoaded: false };

  async componentWillMount() {
    await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    this.setState({fontsAreLoaded: true});
}

  render() {
    if (!this.state.fontsAreLoaded) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    
  else{
    
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
