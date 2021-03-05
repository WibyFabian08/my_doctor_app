import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Button, Link, Gap } from '../../components';
import { ICPhotoNull, ICAdd } from '../../asstets';
import { colors, fonts } from '../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UploadPhoto = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title='Upload Photo' icon='back-dark' onPress={() => navigation.goBack()}></Header>
            <Gap height={50}></Gap>
            <View style={styles.content}>
                <View style={styles.content}>
                    <View>
                        <TouchableOpacity style={styles.avatarWrapper} onPress={() => alert('Upload Photo')}>
                            <ICPhotoNull></ICPhotoNull>
                            <ICAdd style={{position: 'absolute', bottom: 0, right: 100}}></ICAdd>
                        </TouchableOpacity>
                        <Gap height={53}></Gap>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.name}>Shayna Melinda</Text>
                            <Gap height={10}></Gap>
                            <Text style={styles.job}>Product Designer</Text>
                        </View>
                    </View>
                    <View>
                        <Button type='primary' title='Upload and Continue' onPress={() => navigation.replace('MainApp')}></Button>
                        <Gap height={30}></Gap>
                        <Link title='Skip for this' size={16} align='center' onPress={() => navigation.replace('MainApp')}></Link>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    content: {
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flex: 1,
        padding: 20
    },
    avatarWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    titleWrapper: {
        justifyContent: "center",
        alignItems: 'center'
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600]
    }, 
    job: {
        fontSize: 18,
        color: colors.text.secondary,
        fontFamily: fonts.primary[600]
    }
})

export default UploadPhoto;