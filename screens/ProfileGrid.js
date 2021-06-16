import React from 'react';
import {View, Text,Image, FlatList, TouchableOpacity} from 'react-native';

const data =[
    {Key: '1'},
    {Key: '2'},
    {Key: '3'},
    {Key: '4'},
    {Key: '5'},
    {Key: '6'},
    {Key: '7'},
    {Key: '8'},
    {Key: '9'},
];

const Test = () => {
    return (
        <View style={{flex: 1}}>
            <TouchableOpacity  
                onPress={() => console.log('Pressed Profile Grid View')} >
                    <Image 
                    source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
                    style={{
                        height: 150,
                        flex: 1,
                        marginEnd:2,
                        marginBottom: 2,
                        alignItems: 'center',
                    }}
                    />
            </TouchableOpacity>
        </View>
    );
}

const ProfileGrid = () => {
    return( 
        <FlatList  
        data={data}
        style= {{marginTop: 2, marginStart: 2}}
        renderItem={({item, index}) => <Test />}
        numColumns={3}
        indicatorStyle={'white'}
        showsVerticalScrollIndicator= {true}        
        />
    );
}

export default ProfileGrid;