import React from 'react';
import {View, Text, StyleSheet, ScrollView, LogBox} from 'react-native';
import {
  NewsItem,
  RatedDoctor,
  HomeProfile,
  DoctorCategory,
  Gap,
} from '../../components';
import {colors, fonts} from '../../utils';
import {Doctor1, Doctor2, Doctor3} from '../../asstets';
import {useState} from 'react';
import {useEffect} from 'react';
import {Fire} from '../../config';

const Doctor = ({navigation}) => {
  LogBox.ignoreLogs(['Setting a timer']);
  const [news, setNews] = useState([]);
  const [categoryDoc, setCategoryDoc] = useState([]);

  useEffect(() => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then((result) => {
        if (result.val()) {
          setNews(result.val());
        }
      })
      .catch((err) => {
        console.log(err);
      });

    Fire.database()
      .ref('category_doc/')
      .once('value')
      .then((result) => {
        if (result.val()) {
          setCategoryDoc(result.val());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30}></Gap>
          <View style={styles.wrapperSection}>
            <HomeProfile
              onPress={() => navigation.navigate('UserProfile')}></HomeProfile>
            <Gap height={30}></Gap>
            <Text style={styles.title}>
              Mau konsultasi degan siapa hari ini?
            </Text>
          </View>
          <Gap height={16}></Gap>
          <View style={styles.doctorCategory}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Gap width={16}></Gap>
              {categoryDoc.map((item) => (
                <DoctorCategory
                  onPress={() => navigation.navigate('ChooseDoctor')}
                  key={item.id}
                  category={item.category}></DoctorCategory>
              ))}
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
          {news.map((item) => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}></NewsItem>
            );
          })}
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
