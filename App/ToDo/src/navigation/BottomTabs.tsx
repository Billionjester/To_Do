import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet } from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScaleVertical, textScale } from '../styles/responsiveSize';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.themeColor,
        tabBarInactiveTintColor: colors.textGrey,
        tabBarLabelStyle: {
          fontFamily: fontFamily.regular,
          fontSize: textScale(12),
        },
        tabBarStyle: {
          alignItems: 'center',
          paddingTop: moderateScaleVertical(6),
          height: moderateScaleVertical(64),
        },
      }}

    //   tabBar={props => <CustomBottomTabBar />}
    >
      <Tab.Screen
        name={navigationStrings.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarLabel: t("HOME"),
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? imagePath?.ic_home_fill : imagePath.ic_home}
            />
          ),
        }}
      />

      <Tab.Screen
        name={navigationStrings.PROFILE_STACK}
        component={ProfileStack}
        options={{
          tabBarLabel: t("PROFILE"),
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? imagePath?.ic_profile_fill : imagePath.ic_profile}
            />
          ),
        }}
      />



    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
