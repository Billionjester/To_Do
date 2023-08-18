import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import './src/constants/lang/index';
import Routes from './src/navigation/Routes';
import { saveUserData } from './src/redux/reducer/auth';
import store from './src/redux/store';
import { getUserData } from './src/utils/utils';


const { dispatch } = store;


export default function App() {

  useEffect(() => {
    getUserSession();
  }, []);

  const getUserSession = async () => {
    const userData = await getUserData();
    console.log(userData, '<===userData in App.js');
    if (!!userData) {
      dispatch(saveUserData(userData));
    }
  };

  return (

    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
      <Toast position="top" topOffset={10} />
    </Provider>
  );
}

const styles = StyleSheet.create({});