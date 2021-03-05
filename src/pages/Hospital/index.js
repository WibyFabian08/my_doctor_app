import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {CoverHospital} from '../../asstets';
import {colors, fonts} from '../../utils';
import {ListHospital} from '../../components';
import {Hospital1, Hospital2, Hospital3} from '../../asstets';
import { useState } from 'react';


const Hospital = () => {
    const [hospitals, setHospitals] = useState([
        {
            id: 1,
            name: 'Rumah Sakit Citra Bunga Merdeka',
            address: 'Jln. Surya Sejahtera 20',
            image: Hospital1
        },
        {
            id: 2,
            name: 'Rumah Sakit Anak Happy Family & Kids',
            address: 'Jln. Surya Sejahtera 20',
            image: Hospital2
        },
        {
            id: 3,
            name: 'Rumah Sakit Jiwa Tingkat Paling Atas',
            address: 'Jln. Surya Sejahtera 20',
            image: Hospital3
        }
    ])
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={CoverHospital}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.qty}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                {
                    hospitals.map((hospital) => (
                        <ListHospital key={hospital.id} name={hospital.name} address={hospital.address} image={hospital.image} onPress={() => alert('Hospital Not Ready Yet')}></ListHospital>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        height: 240,
        alignItems: 'center',
        paddingTop: 30
    },
    title:{
        fontSize: 20,
        color: 'white',
        fontFamily: fonts.primary[600],
        marginBottom: 5
    },
    qty: {
        fontSize: 14,
        color: 'white',
        fontFamily: fonts.primary[600]
    },
    container: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    content: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 20,
        paddingTop: 30,
        marginTop: -20
    }
})

export default Hospital;