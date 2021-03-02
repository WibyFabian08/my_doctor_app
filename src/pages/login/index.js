import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ILLogo} from '../../asstets';
import {Input, Button, Link, Gap} from '../../components';
import {fonts} from '../../utils';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ILLogo></ILLogo>
                <Gap height={40}></Gap>
                <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
                <Gap height={24}></Gap>
                <Input label='Email Address'></Input>
                <Gap height={20}></Gap>
                <Input label='Password' secureTextEntry></Input>
                <Gap height={10}></Gap>
                <Link size={14} title='Forgot My Password'></Link>
                <Gap height={20}></Gap>
                <Button type='primary' title='Sign In' onPress={() => navigation.navigate('MainApp')}></Button>
                <Gap height={30}></Gap>
                <Link size={16} align='center' title='Create New Account' onPress={() => navigation.navigate('Register')}></Link>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 28,
        fontFamily: fonts.primary[600]
    }
})

export default Login;