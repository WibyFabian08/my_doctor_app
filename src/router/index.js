import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Started, Register, Login} from '../pages';

const Stack = createStackNavigator();

const Router = ()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name='Started' component={Started}options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Router;