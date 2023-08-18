import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import navigationStrings from '../constants/navigationStrings';
import { Home, Profile } from '../Screens';
const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
