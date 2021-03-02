import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container(props.type)} onPress={props.onPress}>
      <Text style={styles.label(props.type)}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'Get Started' ? '#00CAD4' : 'white',
    borderRadius: 10,
  }),
  label: (type) => ({
    color: type === 'Get Started' ? 'white' : 'black',
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold'
  }),
});

export default Button;
