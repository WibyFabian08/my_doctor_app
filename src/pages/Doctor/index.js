import React, { useEffect, useState } from 'react';
import { LogBox, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ICPhotoNull } from '../../asstets';
import {
  DoctorCategory,
  Gap, HomeProfile, NewsItem,
  RatedDoctor
} from '../../components';
import { Fire } from '../../config';
import { colors, fonts, getData } from '../../utils';

const Doctor = ({navigation}) => {
  LogBox.ignoreLogs(['Setting a timer']);
  const [news, setNews] = useState([]);
  const [categoryDoc, setCategoryDoc] = useState([]);
  const [topRatedDoctor, setTopRatedDoctor] = useState([]);
  const [profile, setProfile] = useState({
    photo: ICPhotoNull,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    navigation.addListener('focus', () => {
      getUserData();
    })
    getCategoryDoctor();
    getTopRatedDoctor();
    getNews();
  }, [navigation]);

  const getTopRatedDoctor = () => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((result) => {
        const oldData = result.val();
        const data = [];
        Object.keys(oldData).map((key) => {
          data.push({
            id: key,
            data: oldData[key],
          });
        });
        setTopRatedDoctor(data);
      });
  };

  const getCategoryDoctor = () => {
    Fire.database()
      .ref('category_doc/')
      .once('value')
      .then((result) => {
        if (result.val()) {
          const data = result.val();
          const filterData = data.filter(el => el !== null);

          setCategoryDoc(filterData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then((result) => {
        if (result.val()) {
          const data = result.val();
          const filterData = data.filter(el => el !== null);

          setNews(filterData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
      data.photo = res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto;
      setProfile(res);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30}></Gap>
          <View style={styles.wrapperSection}>
            <HomeProfile
              profile={profile}
              onPress={() => navigation.navigate('UserProfile', profile)}></HomeProfile>
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
                  onPress={() => navigation.navigate('ChooseDoctor', item)}
                  key={item.id}
                  category={item.category}></DoctorCategory>
              ))}
              <Gap width={6}></Gap>
            </ScrollView>
          </View>
          <Gap height={30}></Gap>
          <View style={styles.wrapperSection}>
            <Text style={styles.ratedDoctor}>Top Rated Doctors</Text>
            {topRatedDoctor.map((doctor) => {
              return (
                <RatedDoctor
                  key={doctor.id}
                  image={{uri: doctor.data.photo}}
                  name={doctor.data.fullName}
                  job={doctor.data.category}
                  onPress={() =>
                    navigation.navigate('ProfileDoctor', doctor)
                  }></RatedDoctor>
              );
            })}
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
