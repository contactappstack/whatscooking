import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import Expo from 'expo';
class ImagePick extends Component {
    state = {
        choosenImage: null,
        takenImage: null
    };

    openImagePickerAsync = async () => {
        let { status } = await Expo.Permissions.askAsync(
            Expo.Permissions.CAMERA_ROLL
        );
        if (status !== 'granted') {
            console.error('Camera roll access denied');
            return;
        }
        let img = await Expo.ImagePicker.launchImageLibraryAsync({
            mediaTypes: Expo.ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
        });
        this.setState({ takenImage: img });
        console.log(this.state.choosenImage.uri);
    };

    openCameraAsync = async () => {
        let { status } = await Expo.Permissions.askAsync(
            Expo.Permissions.CAMERA
        );
        if (status !== 'granted') {
            console.error('Camera access denied');
            return;
        }
        let img = await Expo.ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,

        });
        this.setState({ choosenImage: img });
        console.log(this.state.choosenImage.uri);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button title="Open cameraroll" onPress={this.openImagePickerAsync} />
                </View>
                <View style={styles.button}>
                    <Button title="Open camera" onPress={this.openCameraAsync} />
                </View>

                {(this.state.choosenImage !== null &&
                    <Image
                        source={{ uri: this.state.choosenImage.uri }}
                        style={{
                            width: 200,
                            height: 200,
                        }}

                    />
                )}


                {(this.state.takenImage !== null &&
                    <Image
                        source={{ uri: this.state.takenImage.uri }}
                        style={{
                            width: 200,
                            height: 200,
                        }}
                    />
                )}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        paddingTop: Expo.Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
    }
})
export default ImagePick;