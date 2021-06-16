import React from 'react';
import { Image, ScrollView,View,StyleSheet, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import users from "../userList.json";

const ConstantStory = () => {
    return (
        <ScrollView  style={{flex: 1}} horizontal>
            <TouchableOpacity></TouchableOpacity>
            {users.map((item,index)=> (
                <View style={{width: 85,padding: 5, backgroundColor: '#000'}} key={index}>
                    <LinearGradient colors ={['#bc2a8d','#e95950', '#fccc63' ]} style={{padding: 2, borderRadius: 50 }}>
                        <Image
                        source={{uri: item.photo}}
                        style={styles.userImage}
                        />
                    </LinearGradient>
                    <Text style={styles.username}>{item.name}</Text>
                </View>
                
            ))}
        </ScrollView>

    );

}
const styles= StyleSheet.create({
        userImage:{
            height:70,
            width: 70,
            borderRadius:50,
            borderColor: '#fff',
            borderWidth: 4,
        },
        username: {
            color: '#fff',
            textAlign: 'center',
            fontSize: 12,
            textTransform: 'lowercase',
            marginTop: 5,
        },
        line : {
            paddingHorizontal: 8,
            borderBottomColor: '#E6E5E2',
            borderBottomWidth: 1,
            marginTop: 10
        },
});


export default ConstantStory;