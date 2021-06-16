import React from 'react';
import { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import FollowersList from '../screens/followerList';

const followers = () => {
    const [data, setdata] = useState([
        { text: 'Your photos liked by James', key: '1' },
        { text: 'Daniel commented on your photo', key: '2' },
        { text: 'Your photos liked by Lucifer', key: '3' },
        { text: 'Your photos liked by Sasuke', key: '4' },
        { text: 'Your photos liked by Jiraya', key: '5' },
        { text: 'Shelby commented on your photo', key: '6' },
        { text: 'Your photos liked by Noyan', key: '7' },
        { text: 'Bravo commented on your photo', key: '8' },
        { text: 'Your photos liked by Ray', key: '9' },
        { text: 'Peter commented on your photo', key: '10' },
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <FollowersList item={item} />
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#000"
    },
});
export default followers;