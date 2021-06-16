import React from 'react';
import {View, Text, Button, StyleSheet } from "react-native";


const UserBio = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>Lucifer MorningStar </Text>
            <Text style={styles.bio}>  Look in the mirror and see your competitor. Simple hug and cure big issues of life.</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    container : {
        flex :1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#000'
        
    },
    name: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    bio:{
        color: '#fff',
        fontSize: 14,
        fontStyle: 'italic',
    },
});

export default UserBio;