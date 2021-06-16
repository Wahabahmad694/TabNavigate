import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderProfile = () =>{
    return (
        <View style={styles.container}>
            <Icon  name={"lock-closed-outline"} size={28} color={"#fff"} style={styles.shape1}/>
            <Text style={styles.title}>Lucifer123@yahoo.com</Text>
            <Icon  name={"duplicate-outline"} size={28} color={"#fff"} style={styles.shape1}/>
            <Icon  name={"list-outline"} size={28} color={"#fff"} style={styles.shape1}/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 60,
        paddingTop: 10,
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    title : {
        flex: 4,
        fontSize: 18,
        justifyContent: 'flex-start',
        fontWeight: '300',
        textAlign: 'center',
        color:'#fff',
    },
    shape1:{
        flex: 1,
        marginLeft:10,
        alignItems:'flex-end',
        justifyContent: 'flex-end',
    },
});

export default HeaderProfile;