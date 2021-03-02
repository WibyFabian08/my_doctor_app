import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ILLogo} from '../../asstets';
import {Input, Button, Link, Gap} from '../../components';
import {colors} from '../../utils';

const Login = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ILLogo></ILLogo>
                <Gap height={40}></Gap>
                <Text style={styles.title}>Masuk dan mulai berkonsltasi</Text>
                <Gap height={24}></Gap>
                <Input label='Email Address'></Input>
                <Gap height={20}></Gap>
                <Input label='Password' secureTextEntry></Input>
                <Gap height={10}></Gap>
                <Link size={14} title='Forgot My Password'></Link>
                <Gap height={20}></Gap>
                <Button type='Get Started' title='Sign In'></Button>
                <Gap height={30}></Gap>
                <Link size={16} align='center' title='Create New Account'></Link>
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
        fontFamily: 'Nunito-SemiBold'
    }
})

export default Login;