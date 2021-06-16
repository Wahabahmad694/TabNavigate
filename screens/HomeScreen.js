import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import colors from '../res/colors';
import paletts from '../res/paletts';


const DirectMessage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#000" }}>
            <Text style={{ color: 'white' }}> Say! Hello to new Friends </Text>
            <Button
                title="Click here"
                onPress={() => alert('Add new Friends !!')}
            />
        </View>
    );
}

const StoryCamera = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#000" }}>
            <Text style={{ color: 'white' }}> Story Capture Screen </Text>
            <Button
                title="Click here"
                onPress={() => alert('Nice  story !!')}
            />
        </View>
    );
}

const Stack = createStackNavigator();

const HomeScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: colors.bottomBackGround,
                        shadowColor: colors.seperatorLineColor,
                    },
                    headerLeft: () => (
                        <View style={styles.headerLeftContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('StoryCamera')}>
                                <Image
                                    source={require('../assests/images/photo_camera.png')}
                                    style={styles.headerLeftImage}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerRight: () => (
                        <View>
                            <TouchableOpacity
                                style={styles.headerRightContainer}
                                onPress={() => navigation.navigate('DirectMessage')}>
                                <Image
                                    source={require('../assests/images/direct_message.png')}
                                    style={styles.headerRightImage}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTitle: (
                        <TouchableOpacity
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assests/images/logo.png')}
                                style={{ width: 110, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitleStyle: { alignSelf: 'center' },
                    headerTintColor: '#000',
                })}
            />
            <Stack.Screen name="DirectMessage" component={DirectMessage} />
            <Stack.Screen name="StoryCamera" component={StoryCamera}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerLeftContainer: paletts.header.headerLeftContainer,
    headerLeftImage: paletts.header.headerLeftImage,
    headerRightContainer: paletts.header.headerRightContainer,
    headerRightImage: paletts.header.headerRightImage,
});

export default HomeScreen
    ;