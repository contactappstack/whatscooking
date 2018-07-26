import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
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

    render() {
        return (
            <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <Button
                    title="Login"
                    style={{ fontSize: 16, backgroundColor: "#4286f4" }}
                    onPress={this.props.screenProps}
                />
            </View>
        )
    }
}
export default AuthScreen;