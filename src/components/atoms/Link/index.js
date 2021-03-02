import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const Link = (props) => {
    return (
        <TouchableOpacity>
            <Text style={styles.label(props.size, props.align)} onPress={props.onPress}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    label: (size, align) => ({
        color: colors.text.secondary,
        textDecorationLine: 'underline',
        fontSize: size,
        textAlign: align
    })
})

export default Link;