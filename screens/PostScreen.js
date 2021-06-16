import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';

const options = {

    title: 'Select Image',
    customButtons: [
        {
            name: 'customOptionKey',
            title: 'Choose file from Custom Option'
        },
    ],

    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
const LaunchCamera = () => {

    ImagePicker.launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }


        else {
            let source = { uri: response.uri };

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        }
    });
};
const fromGallery = () => {

    ImagePicker.launchImageLibrary(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }


        else {
            let source = { uri: response.uri };

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        }
    });
}

const PostScreen = () => { 
    return (
        <View style={styles.container}>
            <Button
                title="CAPTURE FROM CAMERA "
                backgroundColor="white"
                color="#000"
                onPress={LaunchCamera}
            />
            <View></View>
            <Button
                title="SELECT FROM LIBRARY "
                backgroundColor="white"
                color="#000"
                onPress={fromGallery}
                
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
});

export default PostScreen;