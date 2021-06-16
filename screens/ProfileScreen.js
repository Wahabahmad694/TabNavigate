import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import ProfileHeader from '../screens/ProfileHeader';
import UserBio from '../screens/UserBio';
import EditButton from '../screens/EditButton';
import ConstantStory from '../screens/constantStories';
import ProfileGrid from '../screens/ProfileGrid';
import colors from '../res/colors';


const data =[{key: '1'}];
const ProfileScreen = () => {
return(
    <FlatList
        style={{flex:1, backgroundColor: colors.bottomBackGround}}
        data= {data}
        renderItem={() => (
            <>
                <ProfileHeader />
                <UserBio />
                <EditButton />
                <ConstantStory />
                <ProfileGrid />

            </>
        )}
    />
);
}

export default ProfileScreen;