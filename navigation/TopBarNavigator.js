import React from 'react';
import { Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import following from '../screens/Following';
import followers from '../screens/Following';
 


const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
    const insets= useSafeAreaInsets();
    return (
        <Tab.Navigator
            intialRouteName="Following"
            tabBarOption={{
                activeTintColor: "#e91e63",
                labelStyle: { fontSize: 12 },
                stye: { backgrounColor: 'white', marginTop: insets.top }
            }}
        >
            <Tab.Screen
                name="Following"
                component={following}
                options={{ tabBarLabel: "Following" }}

            />
            <Tab.Screen
                name="Follower"
                component={followers}
                options={{ tabBarLabel: "Followers" }}

            />
        </Tab.Navigator>
    );
}
const TopBarNavigator = () => {
    return(
        <MyTabs/>
    );
}

export default TopBarNavigator;