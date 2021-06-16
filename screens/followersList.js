import React from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FollowersList = ({item}) => {
    return (
        <TouchableOpacity> 
            <View style={styles.item}>
                <Icon name={"heart-outline"} size={22} color={"#FF0000"}/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles= StyleSheet.create({
    item: {
        flex: 1,
        padding : 16,
        marginTop: 10,
        borderRadius: 10,
        borderColor: '#fff',
        flexDirection: 'row',
        fontWeight: 'bold',
        borderWidth: 1,
        borderStyle: 'solid'

    },
    itemText : {
        marginLeft: 10,
        color: '#fff'
    },
});

export default FollowersList;