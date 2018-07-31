import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Container, Header, Content, Title, Right, Left, Body, Button } from 'native-base';
import Drawer from 'react-native-drawer';
import { Font, AppLoading, Icon } from 'expo';
import CardImage from '../components/CardImage';

// temporary list

class Home extends Component {

    state = { fontsAreLoaded: false };

    list = {
        users: [
            {
                id: 0,
                thumbnail: "https://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/1512423191/120417-ashton-kutcher-slide.jpg?itok=eaNnb5KP",
                username: "Ashton Kutcher",
                imageurl: "https://fortunedotcom.files.wordpress.com/2015/09/gettyimages-470408528.jpg"
            },
            {
                id: 1,
                thumbnail: "https://image.afcdn.com/album/D20150130/476575315-916217_H172213_L.jpg",
                username: "Leo DiCaprio",
                imageurl: "https://i.ndtvimg.com/i/2015-10/urlai-roast_625x350_71444723419.jpg"
            },
            {
                id: 2,
                thumbnail: "https://i2-prod.mirror.co.uk/incoming/article9966916.ece/ALTERNATES/s615/PROD-Katy-Perry.jpg",
                username: "katy Perry",
                imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdEajbL8bJNMC99WQYx5LuozFJMD4ouvMXjbNYS8CrMEVdfY6KA"
            },
            {
                id: 3,
                thumbnail: "https://media1.popsugar-assets.com/files/thumbor/0OMfCqYqiUgXJvjLp-UNBMyaNBM/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/03/08/692/n/1922398/3c673e6258c02532a17111.63722636_edit_img_cover_file_43281164_1488986466/i/Celebrities-Celebrating-International-Women-Day-2017.jpg",
                username: "Emma Watson",
                imageurl: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1524072647%2Flos-angeles-street-food2-FT-BLOG0418.jpg%3Fitok%3DqXfBPT-Z&w=700&q=85"
            },
            {
                id: 4,
                thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzamIYDvcNmqVrs1hu3KyFzaF1y5RcKzxU59vRVCehvNJvK8F1",
                username: "Will Smith",
                imageurl: "http://thepunekar.com/wp-content/uploads/2017/06/MIXED-SEA-FOOD-MOILEE-SPAGHETTI-MIXED-SEA-FOOD-MOILEE-SPAGHETTI-.-1024x1024.jpg"
            },
        ]
    }

    async componentWillMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ fontsAreLoaded: true });
    }

    async logout(key) {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch (exception) {
            return false;
        }
    }

    render() {
        // console.log(screenProps)
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 3 },
        }
        if (!this.state.fontsAreLoaded) {
            return (
                <AppLoading
                    startAsync={this._cacheResourcesAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }
        else {
            return (
                <Container>

                    <Header style={{ backgroundColor: "#c9242c" }}>
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Icon.MaterialIcons name='event' size={32} color="#fff" />
                            </Button>
                        </Left>
                        <Body style={styles.titleView}>
                            <Title style={{ fontSize: 23 }}>WhatsCooking</Title>
                        </Body>
                    </Header>
                    <Content>
                        {this.list.users.map(user => {
                            return <CardImage key={user.id} source={this.list.users[user.id]} />
                        })}

                    </Content>
                </Container>
            );
        }

    }
}


const styles = StyleSheet.create({
    titleView: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

})
export default Home;