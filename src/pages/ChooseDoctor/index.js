import React from 'react';
import {View, Text} from 'react-native';
import {Gap, Header, List} from '../../components';
import {Doctor1, Doctor2, Doctor3} from '../../asstets';

const ChooseDoctor = ({navigation}) => {
  return (
    <View>
      <Header
        type="dark"
        icon="back-light"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}></Header>
      <Gap height={24}></Gap>
      <List
        type="next"
        image={Doctor1}
        name="Alexander Jennie"
        message="Wanita"
        onPress={() => navigation.navigate('Chatting')}></List>
      <List
        type="next"
        image={Doctor2}
        name="John McParker Steve"
        message="Pria"
        onPress={() => navigation.navigate('Chatting')}></List>
      <List
        type="next"
        image={Doctor3}
        name="Naerobi Puti Hayza"
        message="Wanita"
        onPress={() => navigation.navigate('Chatting')}></List>
    </View>
  );
};

export default ChooseDoctor;
