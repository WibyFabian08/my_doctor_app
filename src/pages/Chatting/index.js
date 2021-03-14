import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {Fire} from '../../config';
import { useEffect } from 'react';

const Chatting = ({navigation, route}) => {
  const [chatContent, setChatContent] = useState('');
  const profileDoctor = route.params;
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    getData('user').then((result) => {
      setDataUser(result)
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  const sendChat = () => {
      const today = new Date();
      const hour = today.getDate();
      const minute = today.getMinutes();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const date = today.getDate();
      const day = today.getDay();

      const data = {
        sendBy: dataUser.uid,
        chatDate: new Date().getTime(),
        chatTime: `${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`,
        chatContent: chatContent
      }

      const urlFirebase = `chatting/${dataUser.uid}_${profileDoctor.data.uid}/allChat/${year}-${month}-${date}`

      Fire.database().ref(urlFirebase).push(data)
      .then(() => {
        setChatContent('')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <View style={styles.container}>
      <Header
        type="dark-profile"
        icon="back-light"
        title="Nairobi Puti Hayza"
        onPress={() => navigation.goBack()}
        nama={profileDoctor.data.fullName}
        category={profileDoctor.data.profession}
        photo={profileDoctor.data.photo}></Header>
      <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.date}>Senin, 21 Maret, 2020</Text>
            <ChatItem isMe></ChatItem>
            <ChatItem></ChatItem>
            <ChatItem isMe></ChatItem>
            <ChatItem></ChatItem>
          </ScrollView>
      </View>
      <InputChat onChangeText={(value) => setChatContent(value)} value={chatContent} onPress={() => sendChat()}></InputChat>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  date: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    fontSize: 12,
    paddingVertical: 20,
  },
  content: {
    flex: 1,
  },
});

export default Chatting;
