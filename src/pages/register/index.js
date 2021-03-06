import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Header} from '../../components';
import {Input, Button, Gap} from '../../components';
import { useForm } from '../../utils';

const Register = ({navigation}) => {
  // const [fullName, setFullname] = useState('FullName');
  // const [email, setEmail] = useState('Pekerjaan');
  // const [pekerjaan, setPekerjaan] = useState('Email');
  // const [password, setPassword] = useState('Password');

  const [form, setForm] = useForm({
    fullName: '',
    pekerjaan: '',
    email: '',
    password: ''
  })

  const submit = () => {
      console.log('full name : ', form.fullName)
      console.log('pekerjaan : ', form.pekerjaan)
      console.log('email : ', form.email)
      console.log('password : ', form.password)
  }

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onPress={() => navigation.goBack()}
          title="Daftar Akun"
          icon="back-dark"></Header>
        <View style={styles.container}>
          <Input label="Full Name" value={form.fullName} onChangeText={(value) => setForm('fullName', value)}></Input>
          <Gap height={24}></Gap>
          <Input label="Pekerjaan" value={form.pekerjaan} onChangeText={(value) => setForm('pekerjaan', value)}></Input>
          <Gap height={24}></Gap>
          <Input label="Email Address" value={form.email} onChangeText={(value) => setForm('email', value)}></Input>
          <Gap height={24}></Gap>
          <Input secureTextEntry label="Password" value={form.password} onChangeText={(value) => setForm('password', value)}></Input>
          <Gap height={50}></Gap>
          <Button
            title="Continue"
            type="primary"
            onPress={() => submit()}></Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
});

export default Register;
