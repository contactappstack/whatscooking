import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';
const SLIDES_DATA = [
    { text: "Welcome Screen 1", color: "#4286f4" },
    { text: "Welcome Screen 2", color: "#40f740" },
    { text: "Welcome Screen 3", color: "#f73baf" }
]
class WelcomeScreen extends Component {
    onSlideComplete = () =>{
        this.props.navigation.navigate('auth');
    }
    render() {
        return (
            <Slides data={SLIDES_DATA}
                onComplete={this.onSlideComplete}
            />
        );
    }
}
export default WelcomeScreen;