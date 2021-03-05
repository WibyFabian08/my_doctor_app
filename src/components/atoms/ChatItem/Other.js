import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { colors, fonts } from '../../../utils';
import {Doctor1} from '../../../asstets';

const IsMe = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={Doctor1}></Image>
        <View>
            <View>
                <Text style={styles.message}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
                </Text>
            </View>
        <Text style={styles.date}>4.20 AM</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingRight: 16,
        flexDirection: 'row'
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 12,
    },  
    message: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginBottom: 8,
        maxWidth: '80%',
        padding: 12,
        backgroundColor: '#0BCAD4',
        borderRadius: 10,
        borderBottomLeftRadius: 0
    },
    date: {
        fontSize: 11,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    }
})

export default IsMe;
