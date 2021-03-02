import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from '../../atoms';
import {Gap} from '../../index';
import {fonts} from '../../../utils';

const Header = (props) => {
  return (
    <View style={styles.container}>
        <Button type="icon-only" icon={props.icon} onPress={props.onPress}></Button>
      <Text style={styles.title}>{props.title}</Text>
      <Gap width={24}></Gap>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
});

export default Header;
