import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { colors, fonts } from '../../../utils';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={colors.primary} size='large'></ActivityIndicator>
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: colors.loadingBackground,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.primary,
        fontSize: 18,
        fontFamily: fonts.primary[600],
        marginTop: 5
    }
})

export default Loading;