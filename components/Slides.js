import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions,Button } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;
class Slides extends Component {
    renderLastSlides(index) {
        return index ===2 ?
            <Button title="Get Started"
            onPress={this.props.onComplete}
            />
            : null
        
    }
    render() {
        return (
            <ScrollView
                horizontal={true}
                style={{ flex: 1 }}
                pagingEnabled
            >
                {this.props.data.map((slides, index) => {
                    return (
                        <View
                            key={index}
                            style={[styles.display, { backgroundColor: slides.color }]}
                        >
                            <Text style={styles.text}>{slides.text}</Text>
                            {this.renderLastSlides(index)}
                        </View>
                    )
                })}
                
            </ ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    display: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH,
    },
    text: {
        fontSize: 30,
        color: '#000'
    }
});
export default Slides;