import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ICBack, ICBackLight } from '../../../asstets';

const IconOnly = (props) => {

    const Icon = () => {
        if(props.icon === 'back-dark') {
            return <ICBack></ICBack>
        }

        if(props.icon == 'back-light') {
            return <ICBackLight></ICBackLight>
        }

        return <ICBack></ICBack>

    }
    return (
        <TouchableOpacity onPress={props.onPress}>
           <Icon></Icon>
        </TouchableOpacity>
    )
}

export default IconOnly;