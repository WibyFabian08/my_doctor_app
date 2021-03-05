import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { colors, fonts } from '../../../utils';

const ProfileItem = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.alumnus}>{props.label}</Text>
            <Text style={styles.kampus}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 16,
        paddingHorizontal: 16,
        marginBottom: 16
    },
    alumnus: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginBottom: 6
    },
    kampus: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})

export default ProfileItem;