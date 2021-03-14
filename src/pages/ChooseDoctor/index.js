import React from 'react';
import {View, Text} from 'react-native';
import {Gap, Header, List} from '../../components';
import {Doctor1, Doctor2, Doctor3} from '../../asstets';
import {Fire} from '../../config';
import {useEffect} from 'react';
import {useState} from 'react/cjs/react.development';

const ChooseDoctor = ({navigation, route}) => {
  const itemCategory = route.params;
  const [dataDoctor, setDataDoctor] = useState([]);

  console.log('Data Dokter : ', dataDoctor);

  useEffect(() => {
    getByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const getByCategory = (category) => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((result) => {
        if (result.val()) {
          const oldData = result.val();
          const data = [];
          Object.keys(oldData).map((item) => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });

          setDataDoctor(data);
        }
      });
  };
  return (
    <View>
      <Header
        type="dark"
        icon="back-light"
        title={`Pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack()}></Header>
      <Gap height={24}></Gap>
      {dataDoctor.map((doctor) => {
        return (
          <List
            key={doctor.id}
            type="next"
            image={{uri: doctor.data.photo}}
            name={doctor.data.fullName}
            message={doctor.data.gender}
            onPress={() => navigation.navigate('ProfileDoctor', doctor)}></List>
        );
      })}
    </View>
  );
};

export default ChooseDoctor;
