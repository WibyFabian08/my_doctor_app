import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Header, List, Profile} from '../../components';
import {colors, fonts} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()}></Header>
      <Profile name="Shayna Melinda" job="Product Designer"></Profile>
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
        name="Help Center"
        message="Read Our Guidnes"
        type="next"
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