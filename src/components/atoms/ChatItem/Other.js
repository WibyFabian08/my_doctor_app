import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { colors, fonts } from '../../../utils';
import {Doctor1} from '../../../asstets';

const IsMe = (props) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: props.photo}}></Image>
        <View>
            <View>
                <Text style={styles.message}>{props.isiChat}
                </Text>
            </View>
        <Text style={styles.date}>{props.waktuChat}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 8,
        flexDirection: 'row'
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 8,
        marginLeft: 8
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
