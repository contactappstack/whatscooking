import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import Home from './screens/Home';
import ImagePick from './screens/ImagePick';
import ReviewScreen from './screens/ReviewScreen';
import SettingScreen from './screens/SettingScreen';
//import { Provider } from 'react-redux'

//import store from './store'
export default class App extends React.Component {
  render() {
    const MainNavigation = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator({
          home: { screen: Home },
          image: { screen: ImagePick },
          review: {
            screen: createStackNavigator({
              review: { screen: ReviewScreen },
              setting: { screen: SettingScreen }
            })
          }
        })
      }
    },{
      navigationOptions:{
        tabBarVisible:false
      }
    }
  );
    return (
        <View style={styles.container}>
          <MainNavigation />
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
