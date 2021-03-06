import React, { useState } from 'react';
import { useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, List, Profile} from '../../components';
import {getData} from '../../utils';
import {ICPhotoNull} from '../../asstets';
import {Fire} from '../../config';

const UserProfile = ({navigation, route}) => {
  const data = route.params;

  const signOut = () => {
    Fire.auth().signOut()
    .then(() => {
      navigation.replace('Started')
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  return (
    <View style={styles.container}>
      <Header title="Profile" icon='back-dark' onPress={() => navigation.goBack()}></Header>
      {
        data.fullName.length > 0 && <Profile name={data.fullName} job={data.pekerjaan} photo={data.photo}></Profile>
      }
      <List
        name="Edit Profile"
        message="Last Updated Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditUserProfile')}></List>
      <List
        name="Language"
        message="Available 12 Languages"
        type="next"
        icon="language"></List>
      <List
        name="Give Us Rate"
        message="On Google Play Store"
        type="next"
        icon="rate"></List>
      <List
        name="Sign Out"
        message="Close Your Account"
        type="next"
        onPress={() => signOut()}
        icon="help"></List>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  }
});

export default UserProfile;
