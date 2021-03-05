import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Started,
  Register,
  Login,
  UploadPhoto,
  Doctor,
  Hospital,
  Message,
  ProfileDoctor,
  ChooseDoctor,
  Chatting,
  UserProfile,
  EditUserProfile
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigator {...props}></BottomNavigator>}>
      <Tab.Screen name="Doctor" component={Doctor}></Tab.Screen>
      <Tab.Screen name="Message" component={Message}></Tab.Screen>
      <Tab.Screen name="Hospital" component={Hospital}></Tab.Screen>
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Started"
        component={Started}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="ProfileDoctor"
        component={ProfileDoctor}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="ChooseDoctor"
        component={ChooseDoctor}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
        name="EditUserProfile"
        component={EditUserProfile}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Router;
