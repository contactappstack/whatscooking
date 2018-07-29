import React from 'react';
import { createBottomTabNavigator, createStackNavigator ,createDrawerNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/AuthScreen';
import Home from '../screens/Home';
import ImagePick from '../screens/ImagePick';
import ReviewScreen from '../screens/ReviewScreen';
import Details from '../screens/Details';
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

const HomeNav = createStackNavigator({
  Home : {
    screen : Home,
    navigationOptions:{
      header : null
    }
  },
  Details : {
    screen : Details,
    navigationOptions:{
      header : null
    }
  }
})

const MainNavigation = createBottomTabNavigator({
  home: { 
    screen: HomeNav,
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
      tabBarIcon: () => <Icon.Entypo name="home" size={32} color="#c9242c" />
  }
   },
  review: {
      screen: ReviewScreen,
      navigationOptions : {
        tabBarOptions : {
          showLabel : false
        },
        tabBarIcon: () => <Icon.MaterialIcons name="person" size={32} color="#c9242c" />
    }

  }
  },
);

HomeNav.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default nav = {
  AuthNavigation,
  MainNavigation,
}

