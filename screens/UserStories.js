import React from 'react';
import { Image, ScrollView, View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import people from "../userStatus.json";
import Icon from 'react-native-vector-icons/Ionicons';

const UserStories = () => {
    return (
        <ScrollView style={{ flex: 1 }} horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ padding: 7, backgroundColor: '#000' }}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTonyB4lHYAfl4oOM0rgkgBKPzQFrJWKbKaQ&usqp=CAU' }}
                    style={styles.userImage}
                />

                <View style={{ position: 'absolute' }}>
                    <View style={styles.addBtnContainer}>
                        <Icon name="add" style={styles.addBtn} />
                    </View>
                    <Text style={styles.username, {textTransform: 'capitalize', color: '#fff' ,marginLeft: 10} }>Your Story</Text>
                </View>
            </View>

            {people.map((item, index) => (
                <View style={{ width: 85, padding: 5, backgroundColor: '#000' }} key={index}>
                    <LinearGradient colors={['#bc2a8d', '#e95950', '#fccc63']} style={{ padding: 2, borderRadius: 50 }}>
                        <Image
                            source={{ uri: item.photo }}
                            style={styles.userImage}
                        />
                    </LinearGradient>
                    <Text style={styles.username}>{item.name}</Text>
                </View>

            ))}
        </ScrollView>

    );

}
const styles = StyleSheet.create({
    userImage: {
        height: 70,
        width: 70,
        borderRadius: 50,
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
    line: {
        paddingHorizontal: 8,
        borderBottomColor: '#E6E5E2',
        borderBottomWidth: 1,
        marginTop: 10
    },
    addBtnContainer: {
            marginTop: 55,
            backgroundColor: '#1E90FF',
            marginLeft: 55,
            width: 25,
            height: 25  ,
            borderRadius: 50,
            borderWidth: 1.5,
            borderColor: '#E6E5E2',
            justifyContent: 'center',
    },
    addBtn: {
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
    },
});


export default UserStories;