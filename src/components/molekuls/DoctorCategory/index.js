import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ICDoctor1, ICDoctor2, ICDoctor3} from '../../../asstets';
import { colors } from '../../../utils';

const DoctorCategory = (props) => {

  const Icon = () => {
    if(props.category === 'dokter umum') {
      return <ICDoctor1></ICDoctor1>
    }

    if(props.category == 'dokter obat') {
      return <ICDoctor2></ICDoctor2>
    }

    if(props.category == 'dokter anak') {
      return <ICDoctor3></ICDoctor3>
    }

    return <ICDoctor1></ICDoctor1>
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.card}>
          <View>
            <Icon></Icon> 
          </View>
          <View>
            <Text style={styles.desc}>Saya butuh</Text>
            <Text style={styles.need}>{props.category}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({ 
  card: {
    padding: 10,
    width: 100,
    height: 130,
    backgroundColor: colors.cardLight,
    borderRadius: 10,
    justifyContent: 'space-between',
    marginRight: 10
  },
  desc: {
      fontSize: 12,
      color: colors.text.secondary
  },
  need: {
    fontSize: 12,
    color: colors.text.primary,
    textTransform: 'capitalize'
  }
});

export default DoctorCategory;
