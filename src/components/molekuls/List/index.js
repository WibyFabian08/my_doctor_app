import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { ICNext, ICStart, ICDesc, ICLanguage, ICProfile } from '../../../asstets';
import {fonts, colors} from '../../../utils';

const List = (props) => {
  const Icon = () => {
    if(props.icon === 'edit-profile') {
      return (
        <ICProfile></ICProfile>
      )
    }

    if(props.icon === 'rate') {
      return (
        <ICStart></ICStart>
      )
    }

    if(props.icon === 'language') {
      return (
        <ICLanguage></ICLanguage>
      )
    }

    if(props.icon === 'help') {
      return (
        <ICDesc></ICDesc>
      )
    }
  }
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.icon ? <Icon></Icon> : <Image style={styles.image} source={props.image}></Image>}
      <View style={styles.messageWrapper}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.message}>{props.message}</Text>
      </View>
      {
        props.type === 'next' && <ICNext></ICNext>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 16,
    marginBottom: 16,
  },
  messageWrapper: {
    marginLeft: 10,
    flex: 1
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  message: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    maxHeight: 15,
    textTransform: 'capitalize'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
});

export default List;
