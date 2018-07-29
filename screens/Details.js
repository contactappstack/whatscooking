import React from 'react';
import {Text} from 'react-native';
import {Header,Container,Title,Body,Left,Button, Content} from 'native-base';
import {Icon} from 'expo';

let userid

export default class Details extends React.Component{

    userid = this.props.navigation.state.params;
    
    render(){
        console.log(userid)
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
                <Content>
                    <Text>{userid}</Text>
                </Content>
            </Container>
        )
    }
}