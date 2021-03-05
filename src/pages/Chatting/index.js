import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import { colors, fonts } from '../../utils';

const Chatting = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header type='dark-profile' icon='back-light' title='Nairobi Puti Hayza' onPress={() => navigation.goBack()} nama='Naerobi Putri Hayza' category='Dokter Anak'></Header>
            <View style={styles.content}>
                <Text style={styles.date}>Senin, 21 Maret, 2020</Text>
                <ChatItem isMe></ChatItem>
                <ChatItem></ChatItem>
                <ChatItem isMe></ChatItem>
                <ChatItem></ChatItem>
            </View>
            <InputChat></InputChat>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    date: {
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        fontSize: 12,
        paddingVertical: 20
    },
    content: {
        flex: 1
    }
})

export default Chatting;