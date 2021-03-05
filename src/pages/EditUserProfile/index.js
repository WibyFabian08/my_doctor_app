import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Header, Profile, Input, Button, Gap} from '../../components';

const EditUserProfile  = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header title='Daftar Akun' onPress={() => navigation.goBack()}></Header>
                <View style={styles.content}>
                    <Profile edit onPress={() => alert('Change Profile Photo')}></Profile>
                    <Input label='Full name'></Input>
                    <Gap height={24}></Gap>
                    <Input label='Pekerjaan'></Input>
                    <Gap height={24}></Gap>
                    <Input label='Email Address'></Input>
                    <Gap height={24}></Gap>
                    <Input label='Password' secureTextEntry></Input>
                    <Gap height={40}></Gap>
                    <Button type='primary' title='Save Profile' onPress={() => navigation.goBack()}></Button>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    content: {
        paddingHorizontal: 40,
        paddingTop: 10,
        paddingBottom: 40
    }
})

export default EditUserProfile;