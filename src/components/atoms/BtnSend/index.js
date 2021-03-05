import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ICSendDark, ICSendLight} from '../../../asstets';
import { colors } from '../../../utils';

const BtnSend = (props) => {
    return (
        <TouchableOpacity style={styles.container(props.disable)} onPress={props.onPress}>
            {props.disable && <ICSendDark></ICSendDark>}
            {!props.disable && <ICSendLight></ICSendLight>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: (disable) => ({
        backgroundColor: disable ? colors.border : '#0066CB',
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 8,
        paddingBottom: 8,
        paddingRight: 3,
        paddingTop: 3,
        borderRadius: 10
    })
})

export default BtnSend;