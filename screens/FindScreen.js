import React from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";
import FindGrid from '../screens/FindGrid';
import Icon from 'react-native-vector-icons/MaterialIcons';


const FindScreen = () => {
    return (
        <View style={{backgroundColor: '#000',flex: 1}}>
            <View style={styles.container}>
            <Icon name ="search" style={styles.shape} size={25}/>
                <TextInput style={styles.searchText} placeholder='Search'
                />
            </View>
            <FindGrid />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '94%',
        height: 40,
        backgroundColor: '#696969',
        borderRadius: 15,
        marginLeft: 13,
        marginBottom: 2,
        

    },
    shape: {
        marginTop: 8,
        color: '#DCDCDC',
        marginLeft: 6
    },
    searchText: {
        color: '#DCDCDC',
        width: "100%",
        height: '100%',
        paddingLeft: 4,
        fontSize: 14,
        marginLeft: 8,
    },
});

export default FindScreen;