import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {BgGetStarted, ILLogo} from '../../asstets';
import {Button, Gap} from '../../components';

const Started = ({navigation}) => {
  return (
    <ImageBackground source={BgGetStarted} style={styles.container}>
      <View>
        <ILLogo></ILLogo>
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" type="Get Started" onPress={() => navigation.navigate('Register')}></Button>
        <Gap height={16}></Gap>
        <Button title="Sign In" type="Sign In" onPress={() => navigation.navigate('Login')}></Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 91,
    fontSize: 28,
    maxWidth: 250,
    color: 'white',
    fontFamily: 'Nunito-SemiBold'
  }
});

export default Started;
