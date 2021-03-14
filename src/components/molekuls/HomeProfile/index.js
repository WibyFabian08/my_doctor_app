import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ICPhotoNull} from '../../../asstets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';
import {getData} from '../../../utils';

const HomeProfile = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image style={styles.gambar} source={props.profile.photo}></Image>
      <Gap width={12}></Gap>
      <View>
        <Text style={styles.name}>{props.profile.fullName}</Text>
        <Text style={styles.job}>{props.profile.pekerjaan}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gambar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  job: {
    fontSize: 12,
    color: colors.text.secondary,
  },
});

export default HomeProfile;
