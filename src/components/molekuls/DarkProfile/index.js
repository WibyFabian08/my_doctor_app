import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from '../../../components';
import {Doctor1} from '../../../asstets';
import { colors, fonts } from '../../../utils';

const DarkProfile = (props) => {
    return(
        <View style={styles.container}>
            <Button type='icon-only' icon='back-light' onPress={props.onPress}></Button>
            <View style={styles.textWrapper}>
                <Text style={styles.name}>{props.nama}</Text>
                <Text style={styles.category}>{props.category}</Text>
            </View>
            <Image source={Doctor1}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        paddingHorizontal: 16,
        backgroundColor: colors.secondary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    textWrapper: {
        alignItems: 'center',
        flex: 1,
        paddingLeft: 30
    },
    name: {
        fontSize: 20,
        color: colors.white,
        fontFamily: fonts.primary[600]
    },
    category: {
        fontSize: 12,
        color: colors.text.secondary
    }
})

export default DarkProfile;