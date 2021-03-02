import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ICMessageActive,
  ICMessage,
  ICHospitalActive,
  ICHospital,
  ICDoctor,
  ICDoctorActive,
} from '../../../asstets';
import {colors, fonts} from '../../../utils';

const TabItem = (props) => {
  const Icon = () => {
    if (props.label === 'Doctor') {
      return props.active ? (
        <ICDoctorActive></ICDoctorActive>
      ) : (
        <ICDoctor></ICDoctor>
      );
    }

    if (props.label === 'Hospital') {
      return props.active ? (
        <ICHospitalActive></ICHospitalActive>
      ) : (
        <ICHospital></ICHospital>
      );
    }

    if (props.label === 'Message') {
      return props.active ? (
        <ICMessageActive></ICMessageActive>
      ) : (
        <ICMessage></ICMessage>
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      onLongPress={props.onLongPress}>
      <Icon></Icon>
      <Text style={styles.title(props.active)}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: (active) => ({
    color: active ? colors.text.active : colors.text.inActive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
    fontSize: 10,
  }),
});

export default TabItem;
