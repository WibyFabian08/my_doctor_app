import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Profile, ProfileItem } from '../../components';
import { colors, fonts } from '../../utils';

const ProfileDoctor = ({navigation, route}) => {
  const data = route.params;
  return (
    <View>
      <Header
        title="Profile"
        icon="back-dark"
        onPress={() => navigation.goBack()}></Header>
      <View style={styles.container}>
        <Profile name={data.data.fullName} job={data.data.category} photo={{uri: data.data.photo}}></Profile>
        <ProfileItem
          label="Alumnus"
          value={data.data.university}></ProfileItem>
        <ProfileItem
          label="Tempat Praktik"
          value={data.data.hospital_address}></ProfileItem>
        <ProfileItem label="No. STR" value={data.data.str_number}></ProfileItem>
        <Gap height={39}></Gap>
        <View style={styles.content}>
          <Button
            title="Start Consultation"
            type="primary"
            onPress={() => navigation.navigate('Chatting', data)}></Button>
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
