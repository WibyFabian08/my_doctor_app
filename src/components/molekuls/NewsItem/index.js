import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const NewsItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <View style={styles.desc}>
            <Text style={styles.title}>{props.title}</Text>
            <Gap height={4}></Gap>
            <Text style={styles.time}>{props.date}</Text>
        </View>
        <Image source={{uri: props.image}} style={styles.image}></Image>
      <Gap height={12}></Gap>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 12,
        paddingTop: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingHorizontal: 16
    },
    desc: {
        flex: 1,
    },
    title: {
        maxWidth: 204,
        fontSize: 16,
        fontFamily: fonts.primary[600]
    },
    time: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    },
    image: {
        width: 90,
        borderRadius: 10
    }
})

export default NewsItem;
