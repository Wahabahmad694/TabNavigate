import React from 'react';
import UserStories from '../screens/UserStories';

import CardComponent from '../component/CardComponent';
import { FlatList, ScrollView, View } from 'react-native';
import { useState } from 'react';


const Home = () => {
    const [images, setImagesData] = useState([
        {src: "../assests/images/main.jpg", key: '1'},
        {src: "../assests/images/1.jpg", key: '2'},
        {src: "../assests/images/2.jpg", key: '3'},
    ])

    return (
        <ScrollView style={{ backgroundColor: '#000'}} >
            <UserStories />
            <View style={{ backgroundColor: '#000', flex: 1 }}>
                <FlatList
                data={images}
                keyExtractor={(item) => item.key}
                renderItem={({item}) =>(
                    <CardComponent item={item.src}/>
                )}
                
                />

             </View>               
            {/* <CardComponent imageSource="1" />
            <CardComponent imageSource="2" />
            <CardComponent imageSource="3" /> */}
        </ScrollView>
    );
}


export default Home;