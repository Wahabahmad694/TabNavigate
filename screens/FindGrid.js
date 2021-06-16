import React from 'react';
import {View,Image, FlatList, TouchableOpacity} from 'react-native';

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
    {Key: '10'},
    {Key: '11'},
    {Key: '12'},
    {Key: '13'},
    {Key: '14'},
    {Key: '15'},
    {Key: '16'},
    {Key: '17'},
    {Key: '18'},
    {Key: '19'},
    {Key: '20'},
    {Key: '21'},
    
];

const Post = () => {
    return (
        <View style={{flex: 1}} >
            <TouchableOpacity  
                onPress={() => console.log('Pressed Profile Grid View')} >
                    <Image 
                    source={{uri: 'https://picsum.photos/200'}}
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

const FindGrid = () => {
    return( 
        <FlatList  
        data={data}
        style= {{marginTop: 2, marginStart: 2}}
        renderItem={({item, index}) => <Post />}
        numColumns={3}
        indicatorStyle={'white'}
        showsVerticalScrollIndicator= {true}        
        />
    );
}

export default FindGrid;