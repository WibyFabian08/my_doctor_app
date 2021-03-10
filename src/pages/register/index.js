import React from 'react';
import { LogBox, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, Input } from '../../components';
import { Fire } from '../../config';
import { showError, useForm } from '../../utils';

const Register = ({navigation}) => {
  LogBox.ignoreLogs(['Setting a timer']);

  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    fullName: '',
    pekerjaan: '',
    email: '',
    password: '',
  });

  const submit = () => {
    dispatch({type: 'SET_LOADING', value: true})

    Fire.auth()
    .createUserWithEmailAndPassword(form.email, form.password)
      .then((user) => {
        dispatch({type: 'SET_LOADING', value: false})
        setForm('reset');
        const data = {
          fullName: form.fullName,
          pekerjaan: form.pekerjaan,
          email: form.email,
          uid: user.user.uid
        }
        // insert data ke database firebase
        Fire.database()
          .ref('users/' + user.user.uid + '/')
          .set(data);
          
          navigation.replace('UploadPhoto', data);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({type: 'SET_LOADING', value: false})
        setForm('reset');
        showError(errorMessage);
      });
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onPress={() => navigation.goBack()}
          title="Daftar Akun"
          icon="back-dark"></Header>
        <View style={styles.container}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={(value) => setForm('fullName', value)}></Input>
          <Gap height={24}></Gap>
          <Input
            label="Pekerjaan"
            value={form.pekerjaan}
            onChangeText={(value) => setForm('pekerjaan', value)}></Input>
          <Gap height={24}></Gap>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}></Input>
          <Gap height={24}></Gap>
          <Input
            secureTextEntry
            label="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}></Input>
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
