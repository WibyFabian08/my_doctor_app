import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils';
import Button from '../Button';

const InputChat = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Ketik Pesan" onChangeText={props.onChangeText} value={props.value}></TextInput>
      <Button
        type="btn-send"
        disable={props.value.length < 1 ? true : false}
        onPress={props.onPress}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white'
  },
  input: {
    backgroundColor: colors.border,
    flex: 1,
    padding: 14,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    marginRight: 10,
    height: 45,
    color: colors.text.secondary,
    borderRadius: 10,
  },
});

export default InputChat;
