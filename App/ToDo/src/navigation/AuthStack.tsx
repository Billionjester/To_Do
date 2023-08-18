import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {
  Login,
} from '../Screens';

export default function AuthStack(Stack: any) {
  return (
    <React.Fragment>
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
      />

    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
