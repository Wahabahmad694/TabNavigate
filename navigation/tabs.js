import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImagePickerIOS } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostScreen from "../screens/PostScreen";
import FindScreen from "../screens/FindScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Activity from '../screens/ActivityScreen';


const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 5,
                    left: 10,
                    right: 10,
                    elivation: 0,
                    borderRadius: 10,
                    height: 60,
                    backgroundColor: 'white',
                    ...styles.shadow

                }
            }}

        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ tintColor, focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon style={[{ color: tintColor }]} size={27} name={'home-outline'} />
                        <Text style={{ color: focused ? 'red' : 'black', fontSize: 14, fontWeight: '500' }}> Home </Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Find" component={FindScreen} options={{
                tabBarIcon: ({ tintColor, focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon style={[{ color: tintColor }]} size={27} name={'search-outline'} />
                        <Text style={{ color: focused ? 'red' : 'black', fontSize: 14, fontWeight: '500' }}> Search </Text>
                    </View>
                ),

            }} />
            <Tab.Screen name="Post" component={PostScreen} options={({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        
                            <Icon style={[{top: -4, color: focused ? 'red' : 'black' }]} size={60} name={'add-circle-outline'} />
    
                    </View>
                ),
            })
            } />
            <Tab.Screen name="Activity" component={Activity} options={{
                tabBarIcon: ({ tintColor, focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon style={[{ color: tintColor }]} size={27} name={'heart-circle'} />
                        <Text style={{ color: focused ? 'red' : 'black', fontSize: 14, fontWeight: '500' }}> Activity </Text>
                    </View>
                ),

            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ tintColor, focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon style={[{ color: tintColor }]} size={27} name={'person-circle-outline'} />
                        <Text style={{ color: focused ? 'red' : 'black', fontSize: 14, fontWeight: '500' }}> Profile </Text>
                    </View>
                ),

            }} />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});




export default Tabs;