import React from 'react';
import {View, StyleSheet, ScrollView, LogBox} from 'react-native';
import {Header, Loading} from '../../components';
import {Input, Button, Gap} from '../../components';
import {colors, useForm} from '../../utils';
import {Fire} from '../../config';
import {useState} from 'react/cjs/react.development';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {storeData, getData} from '../../utils';

const Register = ({navigation}) => {
  LogBox.ignoreLogs(['Setting a timer']);

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useForm({
    fullName: '',
    pekerjaan: '',
    email: '',
    password: '',
  });

  const submit = () => {
    setIsLoading(true);

    Fire.auth()
    .createUserWithEmailAndPassword(form.email, form.password)
      .then((user) => {
        console.log('Register Success');
        setIsLoading(false);
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
          
          // inser data ke localStorage
          storeData('user', data);

          navigation.navigate('UploadPhoto', data);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setIsLoading(false);
        setForm('reset');
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: 'white',
        });
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
        {isLoading && <Loading></Loading>}
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
