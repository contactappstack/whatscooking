import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

// "scripts": {
//   "test": "node ./node_modules/jest/bin/jest.js --watchAll"
// },
class AuthScreen extends Component {
    state = {
        login_done: false
    }
    // facebook_login = async () => {
    //     let token = await AsyncStorage.getItem('fb_token');
    //     if (token) {
    //         this.setState({ login_done: true })
    //         console.log(token)
    //         this.mainPage()
    //     } else {
    //         this.doFacebookLogin()
    //     }
    // }

    componentWillMount = async() => {
        let token = await AsyncStorage.getItem('fb_token');
        if(token){
            this.setState({ login_done: true })
            console.log(token)
            this.mainPage()
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
        this.setState({ login_done: true });
        this.mainPage();
    }
    mainPage = () =>{
        this.props.navigation.navigate("main")
    }

    render() {
        return (
            <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <Button
                    title="Login"
                    style={{ fontSize: 16, backgroundColor: "#4286f4" }}
                    onPress={this.doFacebookLogin}
                />
            </View>
        )
    }
}
export default AuthScreen;