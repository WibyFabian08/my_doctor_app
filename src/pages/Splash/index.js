import React from 'react';
import {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ILLogo} from '../../asstets';
import {colors, fonts} from '../../utils';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      Fire.auth().onAuthStateChanged((user) => {
        if(user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('Started');
        }
      });
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <ILLogo style={styles.logo}></ILLogo>
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  logo: {
    width: 75,
    height: 86,
  },
});

export default Splash;
