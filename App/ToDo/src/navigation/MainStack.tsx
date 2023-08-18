import React from 'react';
import {StyleSheet} from 'react-native';
import navigationStrings from '../constants/navigationStrings';
import BottomTabs from './BottomTabs';

export default function MainStack(Stack: any) {
  return (
    <React.Fragment>
      <Stack.Screen
        name={navigationStrings.BOTTOM_TABS}
        component={BottomTabs}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
