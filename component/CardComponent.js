import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Button, Body, Thumbnail, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CardComponent = (item) => {
    var pic = "../assests/images/main.jpg";

    // console.log("shown",item);
    return (
        <Card style={{flex:1}}>
            <CardItem>
                <Left>
                    <Thumbnail source={require('../assests/images/me.jpg')} />
                    <Body>
                        <Text>Lucifer</Text>
                        <Text note>Jan 15,2018 </Text>
                    </Body>
                </Left>
                <Right>
                    <Icon name="ellipsis-h" color='#000' size={20} />
                </Right>
            </CardItem>

            <CardItem cardBody style={{marginTop:-8}}>
                <Image source={require(pic)} style={{
                    height: 200, width: null, flex: 1
                }} />
            </CardItem>

            <CardItem style={{ height: 20, marginTop: 4 }}>
                <Left >
                    <Button transparent>
                        <Icon  name="heart"
                            color='#000' size={20} 
                            />
                    </Button>

                    <Button transparent>
                        <Icon name="comments" color='#000' size={20} />
                    </Button>

                    <Button transparent>
                        <Icon name="paper-plane" color='#000' size={20} />
                    </Button>
                </Left>
                <Right>
                    <Button transparent>
                        <Icon name="store" color='#000' size={20}/>
                    </Button>
                </Right>
            </CardItem>
            <CardItem style={{ height: 50 , marginTop: -4}}>
                <Text style={{ color: '#000' }}>101 Likes</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text style={{ color: '#000', fontSize: 14 , marginTop: -25}}>
                    <Text style={{fontWeight:'bold', color: '#000', }}>Lucifer  </Text>The best thing to do is always to follow your greatest desire.”
                    “Life's too short to hold grudges.”
                    “Sometimes betrayal comes from the ones that we expect the least.”
                    “Everyone thinks they know what He wants.
                    </Text>
                </Body>
            </CardItem>

        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});


export default CardComponent;