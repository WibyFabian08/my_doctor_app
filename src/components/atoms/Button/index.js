import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconOnly from './IconOnly';
import {colors, fonts} from '../../../utils';
import BtnSend from '../BtnSend';

const Button = (props) => {
  if (props.type === 'btn-send') {
    return <BtnSend disable={props.disable} onPress={props.onPress}></BtnSend>;
  }

  if (props.type === 'icon-only') {
    return (
      <TouchableOpacity>
        <IconOnly icon={props.icon} onPress={props.onPress}></IconOnly>
      </TouchableOpacity>
    );
  }

  if (props.disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableLabel}>{props.title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container(props.type)}
      onPress={props.onPress}>
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
    fontFamily: fonts.primary[600],
  }),
  disableBg: {
    backgroundColor: colors.button.disable.background,
    borderRadius: 10
  },
  disableLabel: {
    color: colors.text.disable,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
  }
});

export default Button;
