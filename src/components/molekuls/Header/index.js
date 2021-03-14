import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from '../../atoms';
import {Gap} from '../../index';
import {colors, fonts} from '../../../utils';
import DarkProfile from '../DarkProfile';

const Header = (props) => {

  if(props.type === 'dark-profile') {
    return (
      <DarkProfile onPress={props.onPress} nama={props.nama} category={props.category} photo={props.photo}></DarkProfile>
    )
  }

  return (
    <View style={styles.container(props.type)}>
        <Button type="icon-only" icon={props.icon} onPress={props.onPress}></Button>
      <Text style={styles.title(props.type)}>{props.title}</Text>
      <Gap width={24}></Gap>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (type) => ({
    height: type === 'dark' ? 84 : 60,
    backgroundColor: type === 'dark' ? colors.secondary : 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0
  }),
  title: (type) => ({
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
    textTransform: 'capitalize'
  }),
});

export default Header;
