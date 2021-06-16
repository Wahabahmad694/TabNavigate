import React from 'react';
import { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import FollowingList from '../screens/followingList';

const following = () => {
    const [liked, setLiked] = useState([
        { text: 'Your photos liked by James', key: '1' },
        { text: 'Your photos liked by Pablo', key: '2' },
        { text: 'Your photos liked by Lucifer', key: '3' },
        { text: 'Your photos liked by Sasuke', key: '4' },
        { text: 'Your photos liked by Malik', key: '5' },
        { text: 'Your photos liked by Shelby', key: '6' },
        { text: 'Your photos liked by Noyan', key: '7' },
        { text: 'Your photos liked by Zardari', key: '8' },
        { text: 'Your photos liked by Ray', key: '9' },
        { text: 'Your photos liked by Waqas', key: '10' },
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={liked}
                renderItem={({ item }) => (
                    <FollowingList item={item} />
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'flex-start',
        backgroundColor: "#000"
    },
});
export default following;