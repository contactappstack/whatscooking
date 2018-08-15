import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import Router from './navigation/Router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {AppLoading,Font} from 'expo';
import reducer from './store/reducer';

const store = createStore(reducer);

export default class App extends React.Component {

  state = { fontsAreLoaded: false };

  async componentWillMount() {
    await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Arial': require('native-base/Fonts/arial.ttf'),
      });
    this.setState({fontsAreLoaded: true});
}

  render() {
    if (!this.state.fontsAreLoaded) {
      return (
        <Provider store={store}>
          <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
          />
        </Provider>
        
      );
    }
    
  else{
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
        {Platform.OS==='android' && (
        <View style={{
          height : Expo.Constants.statusBarHeight,
          backgroundColor : 'black',
        }} />
        )}
          <Router />
        </View>
      </Provider>
        
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
