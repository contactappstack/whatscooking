import React from 'react';
import { Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';
import { Icon } from 'expo';

export default class CardImage extends React.Component {
    state = {
        favIndex : 0,
        favIcon : <Icon.Ionicons name="md-heart-outline" size={35} color="#d62029"/>,
        bmkIndex : 0,
        bmkIcon : <Icon.FontAwesome name="bookmark-o" size={35} color="#d62029"/>,
        likes : 150
    }

    
    favIconHandler = ()=>{    
        let likes = this.state.likes     
        if(this.state.favIndex==0){           
            likes += 1
            this.setState({favIcon : <Icon.Ionicons name="md-heart" size={35} color="#d62029" />,favIndex:1,likes : likes})
        }
        else{
            likes -= 1
            this.setState({favIcon : <Icon.Ionicons name="md-heart-outline" size={35} color="#d62029" />,favIndex:0,likes : likes})
        }
    }

    bmkIconHandler= ()=>{
        if(this.state.bmkIndex==0){
            this.setState({bmkIcon : <Icon.FontAwesome name="bookmark" size={35} color="#d62029" />,bmkIndex:1})
        }
        else{
            this.setState({bmkIcon : <Icon.FontAwesome name="bookmark-o" size={35} color="#d62029"/>,bmkIndex:0})
        }
    }

    render() {
        // source={require(this.props.source)}
        

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: this.props.source.thumbnail}} />
                        <Body>
                        <Text style={styles.username}>{this.props.source.username}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <TouchableOpacity onPress={this.props.navigation}>
                <CardItem cardBody>
                    <Image source={{uri : this.props.source.imageurls[0]}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                </TouchableOpacity>                
                <CardItem>
                    <Left>
                        <TouchableOpacity onPress={this.favIconHandler}>
                            {this.state.favIcon}
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingLeft: 20}}>
                            <Icon.FontAwesome name="comments-o" size={35} color="#d62029" />
                        </TouchableOpacity>
                    </Left>
                    <Right>
                        <TouchableOpacity onPress={this.bmkIconHandler}>
                            {this.state.bmkIcon}
                        </TouchableOpacity>
                    </Right>
                </CardItem>
                <CardItem>
                    <Text style={styles.likes}>Liked by {this.state.likes}</Text>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    username:{
        fontSize: 18,
        fontWeight: '500',
        color: "#c9242c",
    },
    nameSection: {
        flex: 1,
        flexDirection: "column",
        marginTop: 20
    },
    likes : {
        fontSize : 18,
        fontWeight : "500"
    }
})