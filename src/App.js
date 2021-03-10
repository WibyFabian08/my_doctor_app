import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import { Loading } from './components';


const MainApp = () => {
  const globalState = useSelector((state) => state);
  return (
    <>
      <NavigationContainer>
        <Router></Router>
      </NavigationContainer>
      <FlashMessage position='top'></FlashMessage>
      {
        globalState.loading && <Loading></Loading>
      }
    </>
  )
};

const App = () => {
  return (
    <>
    <Provider store={store}>
      <MainApp></MainApp>
    </Provider>
    </>
  )
}

export default App;
