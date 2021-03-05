import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {List} from '../../components';
import {colors, fonts} from '../../utils';
import {Doctor1, Doctor2, Doctor3} from '../../asstets';

const Message = ({navigation}) => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Alexander Jennie',
      message: 'Baik bu, terimakasih banyak atas wakt...',
      image: Doctor1,
    },
    {
      id: 2,
      name: 'Naerobi Putri hayza',
      message: 'Oh tentu saja tidak karena jeruk it...',
      image: Doctor2,
    },
    {
      id: 3,
      name: 'John McParker Steve',
      message: 'Oke menurut pak doker bagaimana unt...',
      image: Doctor3,
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Messages</Text>
        </View>
        {doctors.map((doctor) => (
          <List
            key={doctor.id}
            name={doctor.name}
            message={doctor.message}
            image={doctor.image}
            onPress={() => navigation.navigate('Chatting')}></List>
        ))}
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
