import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { colors, fonts } from '../../../utils';

const ListHospital = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Image style={styles.poto} source={props.image}></Image>
            <View style={styles.desc}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.address}>{props.address}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 16,
        paddingHorizontal: 16,
        marginBottom: 16
    },
    poto: {
        width: 80,
        height: 60
    },
    desc: {
        marginLeft: 10
    },
    name: {
        maxWidth: 151,
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginBottom: 5
    },
    address: {
        fontSize: 12,
        color: colors.text.secondary,
        fontFamily: fonts.primary[600]
    }
})

export default ListHospital;