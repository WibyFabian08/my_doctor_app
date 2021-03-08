import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {UserPict} from '../../../asstets';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';
import {getData} from '../../../utils';

const HomeProfile = (props) => {
    const [profileData, setProfileData] = useState({
        fullName: '',
        photo: UserPict,
        pekerjaan: ''
    })

    useEffect(() => {
        getData('user')
        .then((result) => {
          const data = result;
          data.photo = {uri: result.photo}
          setProfileData(data);
        })
        .catch((err) => {
          console.log(err)
        })
  
    },[])
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Image style={styles.gambar} source={profileData.photo}></Image>
            <Gap width={12}></Gap>
            <View>
                <Text style={styles.name}>{profileData.fullName}</Text>
                <Text style={styles.job}>{profileData.pekerjaan}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },  
    gambar: {
        height: 46,
        width: 46,
        borderRadius: 46/2
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },
    job: {
        fontSize: 12,
        color: colors.text.secondary
    }
})

export default HomeProfile;