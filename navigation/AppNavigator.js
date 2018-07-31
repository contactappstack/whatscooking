import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/AuthScreen';
import Home from '../screens/Home';
import ImagePick from '../screens/ImagePick';
import ProfileScreen from '../screens/ProfileScreen';
import {Icon} from 'expo';

const AuthNavigation = createStackNavigator({
  welcome: { 
    screen: WelcomeScreen,
    navigationOptions:{
      header : null
    } 
  },
  auth: { 
    screen: AuthScreen,
    navigationOptions:{
      header : null
    } 
  },
})

const MainNavigation = createBottomTabNavigator({
  home: { 
    screen: Home,
    navigationOptions:{
      tabBarOptions : {
        showLabel : false
      },
      tabBarIcon: () => <Icon.Entypo name="home" size={32} color="#c9242c" />,
    },
  },
  image: { 
    screen: ImagePick,
    navigationOptions : {
      tabBarOptions : {
        showLabel : false
      },
      tabBarIcon: () => <Icon.MaterialIcons name="camera-enhance" size={32} color="#c9242c" />
  }
   },
  review: {
      screen: ProfileScreen,
      navigationOptions : {
        tabBarOptions : {
          showLabel : false
        },
        tabBarIcon: () => <Icon.MaterialIcons name="person" size={32} color="#c9242c" />
    }

  }
  },
);

export default nav = {
  AuthNavigation,
  MainNavigation
}

