import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Header} from '../../components';
import {Input, Button, Gap} from '../../components';

const Register = ({navigation}) => {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header onPress={() => navigation.goBack()} title='Daftar Akun' icon='back-dark'></Header>
                <View style={styles.container}>
                    <Input label='Full Name'></Input>
                    <Gap height={24}></Gap>
                    <Input label='Pekerjaan'></Input>
                    <Gap height={24}></Gap>
                    <Input label='Email Address'></Input>
                    <Gap height={24}></Gap>
                    <Input secureTextEntry label='Password' ></Input>
                    <Gap height={50}></Gap>
                    <Button title='Continue' type='primary' onPress={() => navigation.navigate('UploadPhoto')}></Button>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: 'white',
        flexDirection: 'column',
    }
})

export default Register;