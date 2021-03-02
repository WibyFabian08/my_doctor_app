import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Gap from '../Gap';
import {colors} from '../../../utils';

const Input = (props) => {
    return (
        <View>
            <Text style={styles.title}>{props.label}</Text>
            <Gap height={10}></Gap>
            <TextInput style={styles.input} secureTextEntry={props.secureTextEntry}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        padding: 13
    },
    title: {
        color: colors.text.secondary
    }
})

export default Input;