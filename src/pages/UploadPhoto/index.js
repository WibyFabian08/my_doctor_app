import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ICPhotoNull, ICAdd, ICRemove} from '../../asstets';
import {colors, fonts} from '../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {getData} from '../../utils';
import { Fire } from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ICPhotoNull);
  const [photoForDB, setPhotoForDB] = useState('');
  // const [data, setData] = useState({});

  const {fullName, pekerjaan, uid} = route.params;

  // get data localStorage
  getData('user').then((result) => {
    console.log(result);
    // setData(result);
  })

  const getImage = () => {
    launchImageLibrary({includeBase64: true}, (response) => {
      console.log('get data : ', response);
      const source = {uri: response.uri};
      
      if(response.didCancel || response.error) {
        showMessage({
          message: 'Upload Photo Gagal',
          type: 'default',
          backgroundColor: colors.error,
          color: 'white'
        })
      } else {
        showMessage({
          message: 'Upload Photo Berhasil',
          type: 'default',
          backgroundColor: colors.primary,
          color: 'white'
        })
        setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
        setPhoto(source);
        setHasPhoto(true);
      }
    });
  };

  const continueAndUpload = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({
        photo: photoForDB
      });

    navigation.navigate('MainApp')
  }

  return (
    <View style={styles.container}>
      <Header
        title="Upload Photo"
        icon="back-dark"
        onPress={() => navigation.goBack()}></Header>
      <Gap height={50}></Gap>
      <View style={styles.content}>
        <View style={styles.content}>
          <View>
            <TouchableOpacity
              style={styles.avatarWrapper}
              onPress={() => getImage()}>
              <Image source={photo} style={styles.poto}></Image>
              <ICAdd style={styles.addIcon}></ICAdd>
              {hasPhoto && <ICRemove style={styles.addIcon}></ICRemove>}
            </TouchableOpacity>
            <Gap height={20}></Gap>
            <View style={styles.titleWrapper}>
              <Text style={styles.name}>{fullName}</Text>
              <Gap height={5}></Gap>
              <Text style={styles.job}>{pekerjaan}</Text>
            </View>
          </View>
          <View>
            <Button
              type="primary"
              title="Upload and Continue"
              onPress={() => continueAndUpload()}
              disable={!hasPhoto}></Button>
            <Gap height={30}></Gap>
            <Link
              title="Skip for this"
              size={16}
              align="center"
              onPress={() => navigation.replace('MainApp')}></Link>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  poto: {
    width: 110,
    height: 110,
    borderRadius: 120 / 2,
  },
  addIcon: {
    position: 'absolute',
    bottom: 0,
    right: 100,
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  job: {
    fontSize: 18,
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],
  },
});

export default UploadPhoto;
