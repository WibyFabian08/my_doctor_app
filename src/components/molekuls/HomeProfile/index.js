import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {UserPict} from '../../../asstets';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const HomeProfile = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Image style={styles.gambar} source={UserPict}></Image>
            <Gap width={12}></Gap>
            <View>
                <Text style={styles.name}>Shayna Melinda</Text>
                <Text style={styles.job}>Product Designer</Text>
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
        width: 46
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