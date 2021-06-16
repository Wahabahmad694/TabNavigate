import React from 'react';
import {Text,View,StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FollowingList = ({item}) => {
    return (
        <TouchableOpacity> 
            <View style={styles.item}>
                <Icon name={"heart-outline"} size={22} color={"#FF0000"}/>
                <Text style={styles.itemText}>{item.text}</Text>
                <Image
                    style={styles.logo}
                    source={require('../assests/images/Pro.png')}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles= StyleSheet.create({
    item: {
        flex: 1,
        padding : 15,
        marginTop: 18,
        borderRadius: 10,
        justifyContent: 'space-around',
        borderColor: '#fff',
        flexDirection: 'row',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#E6E5E2'

    },
    itemText : {

        marginLeft: 20,
        color: '#fff'
    },
    logo: {
        resizeMode: 'center',
        width: 40,
        height:40,
        marginLeft: 100,
    },
});

export default FollowingList;