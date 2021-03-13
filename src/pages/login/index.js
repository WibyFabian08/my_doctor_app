import React from 'react';
import { LogBox, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ILLogo } from '../../asstets';
import { Button, Gap, Input, Link } from '../../components';
import { Fire } from '../../config';
import { fonts, showError, storeData, useForm } from '../../utils';

const Login = ({navigation}) => {
  LogBox.ignoreLogs(['Setting a timer']);

  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((response) => {
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');

        // get data dari DB Firebase
        Fire.database()
          .ref(`users/${response.user.uid}/`)
          .once('value')
          .then((dataDB) => {
            if (dataDB.val()) {
              navigation.replace('MainApp');
              storeData('user', dataDB);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');
        showError(err.message);
      });
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
            onChangeText={(value) => setForm('email', value)}
            value={form.email}></Input>
          <Gap height={20}></Gap>
          <Input
            label="Password"
            value={form.password}
            secureTextEntry
            onChangeText={(value) => setForm('password', value)}></Input>
          <Gap height={10}></Gap>
          <Link size={14} title="Forgot My Password"></Link>
          <Gap height={20}></Gap>
          <Button
            type="primary"
            title="Sign In"
            onPress={() => login()}></Button>
          <Gap height={30}></Gap>
          <Link
            size={16}
            align="center"
            title="Create New Account"
            onPress={() => navigation.navigate('Register')}></Link>
        </ScrollView>
      </View>
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
