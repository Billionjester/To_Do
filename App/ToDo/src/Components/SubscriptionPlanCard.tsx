import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import ButtonWithLoader from './ButtonWithLoader';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import strings from '../constants/lang';

interface Props {
  cardContainerStyle?: object;
  onPressActivePlan?: (event: GestureResponderEvent) => void;
}

const SubscriptionPlanCard: FC<Props> = props => {
  const {cardContainerStyle = {}, onPressActivePlan = () => {}} = props;

  return (
    <LinearGradient
      colors={[colors.themeColor, colors.themeColor]}
      style={{
        height: moderateScale(208),
        borderRadius: moderateScale(16),
        padding: moderateScale(16),
        ...cardContainerStyle,
      }}>
      <Text
        style={{
          ...commonStyles.font16,
          fontFamily: fontFamily.semiBold,
          color: colors.white,
        }}>
        {strings.PREMIUM}
      </Text>
      <Text
        style={{
          ...commonStyles.font13,
          color: colors.white,
          marginTop: moderateScaleVertical(8),
          marginBottom: moderateScaleVertical(16),
        }}>
        Unlock all of our features to be in{'\n'}complete control of your{'\n'}
        experience
      </Text>
      <ButtonWithLoader
        onPress={onPressActivePlan}
        btnText="Active until March 2, 2023"
        btnTxtStyle={{
          color: colors.themeColor,
        }}
        btnStyle={{
          backgroundColor: colors.white,
        }}
      />
    </LinearGradient>
  );
};

export default React.memo(SubscriptionPlanCard);

const styles = StyleSheet.create({});
