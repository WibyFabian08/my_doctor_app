import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors, fonts, getChatTime, getData, setDateChat} from '../../utils';
import {Fire} from '../../config';
import {useEffect} from 'react';

const Chatting = ({navigation, route}) => {
  const scrollViewRef = useRef();
  const profileDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [dataUser, setDataUser] = useState({});
  const [dataChat, setDataChat] = useState([]);

  useEffect(() => {
    getDataUSerLocal();

    // get data chatting dari firebase
    const chatID = `${dataUser.uid}_${profileDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat`;

    Fire.database()
      .ref(urlFirebase)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];

          Object.keys(dataSnapshot).map((key) => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });

          setDataChat(allDataChat);
        }
      });
  }, [dataUser.uid, profileDoctor.data.uid]);

  const getDataUSerLocal = () => {
    getData('user')
      .then((result) => {
        setDataUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendChat = () => {
    const today = new Date();

    const data = {
      sendBy: dataUser.uid,
      chatDate: new Date().getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    const chatID = `${dataUser.uid}_${profileDoctor.data.uid}`;

    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
    const urlMessageUser = `messages/${dataUser.uid}/${chatID}`;
    const urlMessageDocter = `messages/${profileDoctor.data.uid}/${chatID}`;

    const dataMessageUser = {
      lastContentChat: chatContent,
      lastChatDate: data.chatDate,
      uidPartner: profileDoctor.data.uid,
    };

    const dataMessageDoctor = {
      lastContentChat: chatContent,
      lastChatDate: data.chatDate,
      uidPartner: dataUser.uid,
    };

    Fire.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
        // hostory message for user
        Fire.database().ref(urlMessageUser).set(dataMessageUser);

        // history message for doctor
        Fire.database().ref(urlMessageDocter).set(dataMessageDoctor);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <ScrollView
          showsVerticalScrollIndicator={false} ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
          {dataChat.map((chat) => {
            return (
              <View key={chat.id}>
                <Text style={styles.date} >
                  {chat.id}
                </Text>
                {chat.data.map((itemChat) => {
                  return (
                    <ChatItem
                      key={itemChat.id}
                      isMe={
                        itemChat.data.sendBy === dataUser.uid ? true : false
                      }
                      isiChat={itemChat.data.chatContent}
                      waktuChat={itemChat.data.chatTime}
                      photo={profileDoctor.data.photo}></ChatItem>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        onChangeText={(value) => setChatContent(value)}
        value={chatContent}
        onPress={() => sendChat()}></InputChat>
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
