import React from 'react';
import {Text,StyleSheet,View,Image,ScrollView} from 'react-native';
import {Header,Title,Body,Left,Button,Container} from 'native-base';
import {Icon} from 'expo';
import Swiper from 'react-native-swiper'

export default class Details extends React.Component{

    render(){
        let user = this.props.navigation.state.params;
        return(
            <Container>
                <Header style={{backgroundColor : "#c9242c"}}>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.goBack()}>
                        <Icon.Ionicons name="md-arrow-round-back" size={25} color="white" />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{fontSize : 23}}>Details</Title>
                    </Body>   
                </Header>
                <View style={styles.wrapper}>
                    <Swiper horizontal>
                        {user.imageurls.map(img=>{
                            return (
                                <View style={styles.imageView} key={img}>
                                    <Image source={{uri : img}} style={styles.image} />
                                </View>
                            )
                        })}
                    </Swiper>
                </View>       
                <ScrollView style={styles.textView}>
                    <Text style={styles.title}>{user.recipeTitle}</Text>
                    <Text style={styles.body}>{user.recipeBody}</Text>
                </ScrollView>             
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width : "100%",
        height : "35%",
    },
    textView:{
        height : "65%",
        width : "100%",
        paddingTop : 15,
    },
    imageView : {
        width : "100%",
        height : "35%",
    },
    image : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: "#c9242c",
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft : 10
    },
    body:{
        fontSize: 20,
        paddingLeft : 15
    }
  });