import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Gap from '../Gap';
import {colors} from '../../../utils';
import {useState} from 'react';

const Input = (props) => {
  const [border, setBorder] = useState(colors.border);

  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };

  const onBlurForm = () => {
    setBorder(colors.border);
  };

  return (
    <View>
      <Text style={styles.title}>{props.label}</Text>
      <Gap height={10}></Gap>
      <TextInput
        style={styles.input(border)}
        onFocus={() => onFocusForm()}
        onBlur={() => onBlurForm()}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 13,
  }),
  title: {
    color: colors.text.secondary,
    fontSize: 16,
  },
});

export default Input;
