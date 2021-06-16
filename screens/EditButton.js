import React from 'react';
import {View, Text, Button, StyleSheet } from "react-native";


const EditButton = () => {
    return(
        <View style={styles.container}>
           <Button
           title= "Edit Profile"
           style={styles.btn}
           color= "#000"
           onPress={() => alert("Are your sure to Edit profile")}
           />
        </View>
    );
}

const styles= StyleSheet.create({
    container : {
        flex :1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    btn: {
        fontWeight: 'bold',
        marginTop: 10,
        borderRadius: 1, 
        borderColor:'#E6E5E2',
        backgroundColor: 'black',
    },
});

export default EditButton;