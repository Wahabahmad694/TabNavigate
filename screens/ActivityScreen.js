import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {View, Text, Button, StyleSheet } from "react-native";
import TopBarNavigator from '../navigation/TopBarNavigator'


const Activity = () => {
    return(
        <SafeAreaProvider>
            <TopBarNavigator />
        </SafeAreaProvider>
    );
}

export default Activity;