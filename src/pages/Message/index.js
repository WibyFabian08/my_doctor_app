import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, getData } from '../../utils';

const Message = ({navigation}) => {

  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
      getUserLocal();

      const rootDB = Fire.database().ref();
      const url = `messages/${user.uid}/`
      const messageDB = rootDB.child(url);

      messageDB.on('value', async snapshot => {
        if(snapshot.val()) {
          const oldData = snapshot.val();
          const data = [];
  
          const promises = await Object.keys(oldData).map(async (chatHistory) => {
            const urlDoctor = `doctors/${oldData[chatHistory].uidPartner}`;
            const detailDoctor = await rootDB.child(urlDoctor).once('value');
            
            data.push({
              id: chatHistory,
              detailDoctor: detailDoctor.val(),
              data: oldData[chatHistory]
            })
          })
          
          await Promise.all(promises)

          setHistoryChat(data)
        }
      })
  }, [user.uid])

  const getUserLocal = () => {
    getData('user').then((result) => {
      setUser(result);
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Messages</Text>
        </View>
        {
          historyChat.map((data) => {
            const profileDoctor = {
              id: data.detailDoctor.uid,
              data: data.detailDoctor
            }
            return (
              <List
                key={data.id}
                name={data.detailDoctor.fullName}
                message={data.data.lastContentChat}
                image={{uri: data.detailDoctor.photo}}
                onPress={() => navigation.navigate('Chatting', profileDoctor)}></List>
            )
          })
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  text: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 20,
  },
});

export default Message;
