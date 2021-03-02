import React from 'react';
import { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ILLogo} from '../../asstets';
import {colors} from '../../utils';

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Started');
        }, 10000)
    }, [])

    return (
        <View style={styles.container}>
            <ILLogo style={styles.logo}></ILLogo>
            <Text style={styles.title}>My Doctor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        fontFamily: 'Nunito-SemiBold',
        color: colors.text.primary
    },
    logo: {
        width: 75,
        height: 86
    }
})

export default Splash;