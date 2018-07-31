import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ProfileScreen extends Component {
    // whenever stackNavigation take place it sets the class level property
    static navigationOptions = ({ navigation }) => ({
        title: "Review",
        headerRight: <Button
            title="Settings"
            onPress={() => navigation.navigate('setting')}
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0,122,255,1)"
        />,
        style: {
            marginTop: Platform.OS === 'android'
        }
    });

    //static navigationOptions = 

    render() {
        return (
            <View>
                <Text>ProfileScreen</Text>
                <Text>ProfileScreen</Text>
                <Text>ProfileScreen</Text>
                <Text>ProfileScreen</Text>
                <Text>ProfileScreen</Text>
                <Text>ProfileScreen</Text>
            </View>
        );
    }
}
export default ProfileScreen;