import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, StyleSheet, LogBox} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {getData, colors, storeData} from '../../utils';
import {Fire} from '../../config';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Doctor1} from '../../asstets';

const EditUserProfile = ({navigation}) => {
  LogBox.ignoreLogs(['Setting a timer']);

  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    pekerjaan: '',
  });

  const [photoForDB, setPhotoForDB] = useState('');
  const [photo, setPhoto] = useState(Doctor1);

  const [password, setPassword] = useState('');

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        console.log('get data : ', response);
        const source = {uri: response.uri};

        if (response.didCancel || response.error) {
          showMessage({
            message: 'Upload Photo Gagal',
            type: 'default',
            backgroundColor: colors.error,
            color: 'white',
          });
        } else {
          showMessage({
            message: 'Upload Photo Berhasil',
            type: 'default',
            backgroundColor: colors.primary,
            color: 'white',
          });
          setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
          setPhoto(source);
        }
      },
    );
  };

  const update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password Kurang Dari 6 Karakter',
          type: 'default',
          backgroundColor: colors.error,
          color: 'white',
        });
      } else {
        updatePassword();
        updateProfile();
        navigation.replace('MainApp');
      }
    } else {
      updateProfile();
      navigation.replace('MainApp');
    }
  };

  const updateProfile = () => {
    const data = profile;
    data.photo = photoForDB;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log('Update Success');
        storeData('user', data);
        showMessage({
          message: 'Update Profile Berhasil',
          type: 'default',
          backgroundColor: colors.primary,
          color: 'white',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        user
          .updatePassword(password)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  useEffect(() => {
    getData('user')
      .then((result) => {
        const data = result;
        setPhoto({uri: result.photo});
        setProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Edit Profile"
          icon="back-dark"
          onPress={() => navigation.goBack()}></Header>
        <View style={styles.content}>
          <Profile edit onPress={() => getImage()} photo={photo}></Profile>
          <Input
            label="Full name"
            onChangeText={(value) => changeText('fullName', value)}
            value={profile.fullName}></Input>
          <Gap height={24}></Gap>
          <Input
            label="Pekerjaan"
            onChangeText={(value) => changeText('pekerjaan', value)}
            value={profile.pekerjaan}></Input>
          <Gap height={24}></Gap>
          <Input
            label="Email Address"
            value={profile.email}
            editable={false}
            selectTextOnFocus={false}></Input>
          <Gap height={24}></Gap>
          <Input
            label="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry></Input>
          <Gap height={40}></Gap>
          <Button
            type="primary"
            title="Save Profile"
            onPress={() => update()}></Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingTop: 10,
    paddingBottom: 40,
  },
});

export default EditUserProfile;
