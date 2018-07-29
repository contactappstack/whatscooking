import React from 'react';
import {Image,Text,StyleSheet} from 'react-native';
import {Card, CardItem, Thumbnail, Button, Left, Body, Right} from 'native-base';

let image = null

export default class CardImage extends React.Component{

    render(){
        // source={require(this.props.source)}
        return(
            <Card>
                <CardItem cardBody>
                <Image source={{uri : this.props.source.imageurl}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                <Left>
                    <Thumbnail source={{uri: this.props.source.thumbnail}} />
                    <Body>
                    <Text style={styles.username}>{this.props.source.username}</Text>
                    </Body>
                </Left>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    username : {
        fontSize : 18,
        fontWeight : '500',
        color : "#c9242c"
    }
})