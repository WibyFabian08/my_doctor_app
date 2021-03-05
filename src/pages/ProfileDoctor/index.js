import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {PotoProfile, ICFemale} from '../../asstets';
import {Header, ProfileItem, Button, Gap, Profile} from '../../components';
import {colors, fonts} from '../../utils';

const ProfileDoctor = ({navigation}) => {
  return (
    <View>
      <Header
        title="Profile"
        icon="back-dark"
        onPress={() => navigation.goBack()}></Header>
      <View style={styles.container}>
        <Profile name="Naerobi Putri Hayza" job="Dokter Anak"></Profile>
        <ProfileItem
          label="Alumnus"
          value="Universitas Indonesia, 2020"></ProfileItem>
        <ProfileItem
          label="Tempat Praktik"
          value="Rumah Sakit Umum, Bandung"></ProfileItem>
        <ProfileItem label="No. STR" value="0000116622081996"></ProfileItem>
        <Gap height={39}></Gap>
        <View style={styles.content}>
          <Button
            title="Start Consultation"
            type="primary"
            onPress={() => navigation.navigate('Chatting')}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingBottom: 80,
  },
  content: {
    paddingHorizontal: 40,
  },
  iconWrapper: {
    alignItems: 'center',
    position: 'relative',
  },
  profileImg: {
    width: 112,
    height: 114,
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: 150,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 2,
  },
  doctor: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
});

export default ProfileDoctor;
