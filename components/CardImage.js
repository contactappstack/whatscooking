import React from 'react';
import { ImageBackground, Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';
import { Icon } from 'expo';
import DoubleClick from 'react-native-double-click';

let image = null
const DOUBLE_PRESS_DELAY = 300;
var doubleTap = false
export default class CardImage extends React.Component {
    state = {
        fav_color: "#fff"
    }

    render() {
        // source={require(this.props.source)}
        return (
            <Card>
                <CardItem cardBody>
                    <View style={{ height: 250, width: null, flex: 1 }} >
                        <ImageBackground source={{ uri: this.props.source.imageurl }}

                            style={{ height: 200, width: null, flex: 1 }} >
                            <View style={{ marginRight: 5, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                                <Icon.MaterialIcons name='favorite'
                                    size={25} color={this.state.fav_color} />
                            </View>
                            <View style={{ marginTop: 185, marginLeft: 10 }}>
                                <Left>
                                    <Thumbnail source={{ uri: this.props.source.thumbnail }} />
                                    <Body style={styles.nameSection}>
                                        <Text style={styles.username}>{this.props.source.username}</Text>
                                        <Text style={{ color: "#2c528e", fontWeight: '200' }}>Likes : 1234</Text>
                                    </Body>
                                </Left>
                            </View>
                        </ImageBackground>
                    </View>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    username: {
        fontSize: 18,
        fontWeight: '500',
        color: "#c9242c",
    },
    nameSection: {
        flex: 1,
        flexDirection: "column",
        marginTop: 20
    }
})