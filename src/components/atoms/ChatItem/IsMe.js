import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { colors, fonts } from '../../../utils';

const IsMe = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.message}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
            </Text>
        </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingRight: 16
    },
    message: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginBottom: 8,
        maxWidth: '70%',
        padding: 12,
        backgroundColor: colors.cardLight,
        borderRadius: 10,
        borderBottomRightRadius: 0
    },
    date: {
        fontSize: 11,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    }
})

export default IsMe;
