import React, { Component } from 'react';
//import { Button } from 'react-native-elements';
import {
  Platform,
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Title, Left, Body, Button} from 'native-base';
import CardImage from '../components/CardImage';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 30;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

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
    constructor(props) {
        super(props);
        this.state = {
          scrollY: new Animated.Value(0),
        };
      }
    
      _renderScrollViewContent() {
        const data = Array.from({length: 30});
        return (
          /*<View style={styles.scrollViewContent}>
            {data.map((_, i) =>
              <View key={i} style={styles.row}>
                <Text>{i}</Text>
              </View>
            )}
          </View>*/

            <Container>
            <Content>
                {this.list.users.map(user=>{
                    return (
                        <TouchableOpacity style={{height:40, margin:16}} key={user.id} onPress={()=>this.props.navigation.navigate('Details',{userid : user.id})}>
                            <CardImage source={this.list.users[user.id]}/>
                        </TouchableOpacity>
                    
                )
                })}

            </Content>
            </Container>
        );
      }

      list = {
        users:[
            {
                id : 0,
                thumbnail : "https://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/1512423191/120417-ashton-kutcher-slide.jpg?itok=eaNnb5KP",
                username : "Ashton Kutcher",
                imageurl : "https://fortunedotcom.files.wordpress.com/2015/09/gettyimages-470408528.jpg"
            },
            {
                 id : 1,
                 thumbnail : "https://image.afcdn.com/album/D20150130/476575315-916217_H172213_L.jpg",
                 username : "Leo DiCaprio",
                 imageurl : "https://i.ndtvimg.com/i/2015-10/urlai-roast_625x350_71444723419.jpg"
             },
             {
                 id : 2,
                 thumbnail : "https://i2-prod.mirror.co.uk/incoming/article9966916.ece/ALTERNATES/s615/PROD-Katy-Perry.jpg",
                 username : "katy Perry",
                 imageurl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdEajbL8bJNMC99WQYx5LuozFJMD4ouvMXjbNYS8CrMEVdfY6KA"
             },
             {
                 id : 3,
                 thumbnail : "https://media1.popsugar-assets.com/files/thumbor/0OMfCqYqiUgXJvjLp-UNBMyaNBM/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/03/08/692/n/1922398/3c673e6258c02532a17111.63722636_edit_img_cover_file_43281164_1488986466/i/Celebrities-Celebrating-International-Women-Day-2017.jpg",
                 username : "Emma Watson",
                 imageurl : "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1524072647%2Flos-angeles-street-food2-FT-BLOG0418.jpg%3Fitok%3DqXfBPT-Z&w=700&q=85"
             },
             {
                 id : 4,
                 thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzamIYDvcNmqVrs1hu3KyFzaF1y5RcKzxU59vRVCehvNJvK8F1",
                 username : "Will Smith",
                 imageurl : "http://thepunekar.com/wp-content/uploads/2017/06/MIXED-SEA-FOOD-MOILEE-SPAGHETTI-MIXED-SEA-FOOD-MOILEE-SPAGHETTI-.-1024x1024.jpg"
             },
        ]
     }
 
     async logout(key) {
         try {
           await AsyncStorage.removeItem(key);
           return true;
         }
         catch(exception) {
           return false;
         }
       }
       

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
          });
          const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
          });
          const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -500],
            extrapolate: 'clamp',
          });
        return (
            <View style={styles.fill}>
            <ScrollView
              style={styles.fill}
              scrollEventThrottle={16}
              onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                )}
            >
             {this._renderScrollViewContent()}
            </ScrollView>

            <Animated.View style={[styles.header, {height:headerHeight}]}>
                <View style={styles.bar}>
                    <Text style={styles.title}>Name</Text>
                </View>
                <Animated.Image
                    style={[
                    styles.backgroundImage,
                    {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
                    ]}
                    source={{uri:"https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63b44aa6975ca58af1bc9d7edff5981d&auto=format&fit=crop&w=634&q=80"}}
                />
            </Animated.View>
            
          </View>


        );
    }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 20,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
});

export default ProfileScreen;