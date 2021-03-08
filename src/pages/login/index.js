import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, LogBox} from 'react-native';
import {ILLogo} from '../../asstets';
import {Input, Button, Link, Gap, Loading} from '../../components';
import { Fire } from '../../config';
import {colors, fonts, storeData} from '../../utils';
import {useForm} from '../../utils';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  LogBox.ignoreLogs(['Setting a timer']);

  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const login = () => {
    setIsLoading(true)
    console.log('data form : ', form);
    Fire.auth().signInWithEmailAndPassword(form.email, form.password)
    .then((response) => {
      console.log('Response : ', response)
      setIsLoading(false)
      setForm('reset');

      // get data dari DB Firebase
      Fire.database()
      .ref(`users/${response.user.uid}/`)
      .once('value')
      .then((dataDB) => {
        console.log('Data Dari Firebase : ', dataDB.val());
        if(dataDB.val()) {
          navigation.replace('MainApp')
          storeData('user', dataDB)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    })
    .catch((err) => {
      console.log(err)
      setIsLoading(false)
      setForm('reset');
      showMessage({
        message: err.message,
        type: 'default',
        backgroundColor: colors.error,
        color: 'white',
      });
    })
  };

  return (
    <>
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILLogo></ILLogo>
        <Gap height={40}></Gap>
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Gap height={24}></Gap>
        <Input
          label="Email Address"
          onChangeText={(value) => setForm('email', value)} value={form.email}></Input>
        <Gap height={20}></Gap>
        <Input
          label="Password"
          value={form.password}
          secureTextEntry
          onChangeText={(value) => setForm('password', value)}></Input>
        <Gap height={10}></Gap>
        <Link size={14} title="Forgot My Password"></Link>
        <Gap height={20}></Gap>
        <Button type="primary" title="Sign In" onPress={() => login()}></Button>
        <Gap height={30}></Gap>
        <Link
          size={16}
          align="center"
          title="Create New Account"
          onPress={() => navigation.navigate('Register')}></Link>
      </ScrollView>
    </View>
    {
      isLoading && <Loading></Loading>
    }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.primary[600],
  },
});

export default Login;
