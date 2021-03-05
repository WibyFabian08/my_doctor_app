import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  NewsItem,
  RatedDoctor,
  HomeProfile,
  DoctorCategory,
  Gap,
} from '../../components';
import {colors, fonts} from '../../utils';
import {Doctor1, Doctor2, Doctor3} from '../../asstets';
import {News1, News2, News3} from '../../asstets';
import { useState } from 'react';
import {JSONCategoryDoctor} from '../../asstets';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Is it safe to stay at home during coronavirus?',
      time: 'today',
      image: <News1></News1>
    },
    {
      id: 2,
      title: 'Consume yellow citrus helps you healthier',
      time: 'today',
      image: <News2></News2>
    },
    {
      id: 3,
      title: 'Learn how to make a proper oange juice at home',
      time: 'today',
      image: <News3></News3>
    }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30}></Gap>
          <View style={styles.wrapperSection}>
            <HomeProfile onPress={() => navigation.navigate('UserProfile')}></HomeProfile>
            <Gap height={30}></Gap>
            <Text style={styles.title}>
              Mau konsultasi degan siapa hari ini?
            </Text>
          </View>
          <Gap height={16}></Gap>
          <View style={styles.doctorCategory}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Gap width={16}></Gap>
              {
                JSONCategoryDoctor.data.map((item) => (
                  <DoctorCategory onPress={() => navigation.navigate('ChooseDoctor')} key={item.id} category={item.category}></DoctorCategory>
                ))
              }
              <Gap width={6}></Gap>
            </ScrollView>
          </View>
          <Gap height={30}></Gap>
          <View style={styles.wrapperSection}>
            <Text style={styles.ratedDoctor}>Top Rated Doctors</Text>
            <RatedDoctor
              image={Doctor1}
              name="Alexa Rachel"
              job="Pediatrician"
              onPress={() =>
                navigation.navigate('ProfileDoctor')
              }></RatedDoctor>
            <RatedDoctor
              image={Doctor2}
              name="Sunny Frank"
              job="Dentist"
              onPress={() =>
                navigation.navigate('ProfileDoctor')
              }></RatedDoctor>
            <RatedDoctor
              image={Doctor3}
              name="Poe Minn"
              job="Podiatrist"
              onPress={() =>
                navigation.navigate('ProfileDoctor')
              }></RatedDoctor>
            <Gap height={30}></Gap>
            <Text style={styles.ratedDoctor}>Good News</Text>
          </View>
          <Gap height={16}></Gap>
          {
            news.map((news) => (
              <NewsItem key={news.id} title={news.title} time={news.time} image={news.image} onPress={() => alert('News Not Ready Yet')}></NewsItem>
            ))
          }
          <Gap height={30}></Gap>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    maxWidth: 209,
    fontFamily: fonts.primary[600],
  },
  doctorCategory: {
    flexDirection: 'row',
  },
  ratedDoctor: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
});

export default Doctor;
