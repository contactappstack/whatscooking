import React from 'react';
import { AsyncStorage } from 'react-native';
import nav from './AppNavigator';
import {Facebook} from 'expo';
let token = null;



export default class Router extends React.Component{

    state={
        loggedIn : false,
        token : null
    }

    componentWillMount = async() => {
        token = await AsyncStorage.getItem('fb_token');
        if(token){
            this.setState({ loggedIn: true , token : token})
        }
    }

    doFacebookLogin = async () => {
        let { type, token } = await Facebook.logInWithReadPermissionsAsync('602498550137033', {
            permissions: ['public_profile']
        });
        if (type === 'cancel') {
            alert("incorrect password");
            return;
        }
        await AsyncStorage.setItem('fb_token', token);
        this.setState({ loggedIn: true });
    }

    render(){
        return(
            this.state.loggedIn ?
            <nav.MainNavigation screenProps={this.state.token}/> : 
            <nav.AuthNavigation screenProps={() => this.doFacebookLogin()} />
        )
    }
}