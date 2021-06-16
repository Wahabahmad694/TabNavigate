import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import HeaderProfile from '../screens/headerProfile';

const ProfileHeader = () => {
    return(
      <View>
        <HeaderProfile />
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    source ={{uri: 'https://picsum.photos/600'}}
                    style={styles.profilePicture}
                />
            </TouchableOpacity>

            <View style={styles.container2}>
                <View style={styles.containe3 }>
                    <TouchableOpacity>
                        <Text style={styles.numberContainer}>10</Text>
                        <Text style={styles.text}>Posts</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containe3 }>
                    <TouchableOpacity>
                        <Text style={styles.numberContainer}>160</Text>
                        <Text style={styles.text}>Followers</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containe3 }>
                    <TouchableOpacity>
                        <Text style={styles.numberContainer}>120</Text>
                        <Text style={styles.text}>Following</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flexDirection: 'row',
      justifyContent: 'space-around',
      
    },
    profilePicture: {
      height: 70,
      width: 70,
      borderRadius: 100,
      marginLeft: 20,
    },
    numberContainer: {
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: 15,
    },
    container2: {
      flex: 1,
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent:'space-evenly',
      marginEnd: 20,
      marginTop:10,
      marginLeft: 15,
    },
    text: {
      color: 'white',
      //fontWeight: 'bold',
      alignSelf: 'center',
    },
    container3: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-between',
    },
  });

  export default ProfileHeader;