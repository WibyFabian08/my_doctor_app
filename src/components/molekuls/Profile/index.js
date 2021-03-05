import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {UserPict, ICRemove} from '../../../asstets';
import {fonts, colors} from '../../../utils';

const Profile = (props) => {
  return (
    <View style={styles.profileWrapper}>
      <TouchableOpacity onPress={props.onPress}>
        <Image style={styles.poto} source={UserPict}></Image>
        {
          props.edit && <ICRemove style={styles.remove}></ICRemove>
        }
      </TouchableOpacity>
      {props.name && (
        <View style={styles.desc}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.job}>{props.job}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  poto: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  desc: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
    marginBottom: 3,
  },
  job: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
  remove: {
    position: 'absolute',
    bottom: 0,
    right: -4,
  },
});

export default Profile;
