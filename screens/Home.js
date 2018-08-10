import React ,{Component} from 'react';
import {StyleSheet} from 'react-native';
import { AsyncStorage,TouchableOpacity ,TouchableNativeFeedback} from 'react-native';
import { Container, Header, Content, Title, Left, Body, Button} from 'native-base';
import {Icon} from 'expo';
import CardImage from '../components/CardImage';
import nav from '../navigation/AppNavigator';
import {connect} from 'react-redux';

// temporary list

class Home extends Component{

    async logout(key) {
        try {
          await AsyncStorage.removeItem(key);
          return true;
        }
        catch(exception) {
          return false;
        }
      }
      
    render(){
        return(
            <Container>
                <Header style={{backgroundColor : "#c9242c"}}>
                <Left>

                </Left>
                    <Body>
                        <Title style={{fontSize : 23}}>WhatsCooking</Title>
                    </Body>                  
                </Header>
                <Content>
                    {this.props.users.map(user=>{
                        return (
                            <CardImage key={user.id} source={this.props.users[user.id]} navigation={()=>this.props.navigation.navigate("Details",user)}/>
                        
                    )
                    })}
                
                </Content>
            </Container>
        );
    }

}


const styles = StyleSheet.create({
    titleView: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
})

const mapStateToProps = state=>{
    return {
        users : state.users
    }
}
export default connect(mapStateToProps)(Home);