import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Star} from '../../../asstets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const RatedDoctor = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.bioWrapper}>
        <View>
          <Image source={props.image}></Image>
        </View>
        <Gap width={10}></Gap>
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Gap height={5}></Gap>
          <Text style={styles.job}>{props.job}</Text>
        </View>
      </View>
      <View style={styles.star}>
        <Star></Star>
        <Star></Star>
        <Star></Star>
        <Star></Star>
        <Star></Star>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  bioWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  job: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});

export default RatedDoctor;
