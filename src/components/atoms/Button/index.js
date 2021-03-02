import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import IconOnly from './IconOnly';
import {fonts} from '../../../utils';

const Button = (props) => {
  if(props.type === 'icon-only') {
    return (
      <TouchableOpacity>
        <IconOnly icon={props.icon} onPress={props.onPress}></IconOnly>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={styles.container(props.type)} onPress={props.onPress}>
      <Text style={styles.label(props.type)}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'primary' ? '#00CAD4' : 'white',
    borderRadius: 10,
  }),
  label: (type) => ({
    color: type === 'primary' ? 'white' : 'black',
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600]
  }),
});

export default Button;
