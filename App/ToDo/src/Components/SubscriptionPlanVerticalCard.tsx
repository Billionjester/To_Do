import React, {FC} from 'react';
import {
  GestureResponderEvent,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';
import ButtonWithLoader from './ButtonWithLoader';

interface Props {
  cardContainerStyle?: object;
  onPressActivePlan?: (event: GestureResponderEvent) => void;
}

const SubscriptionPlanVerticalCard: FC<Props> = props => {
  const {cardContainerStyle = {}, onPressActivePlan = () => {}} = props;

  return (
    <View
      style={{
        width: moderateScale(200),
        ...cardContainerStyle,
      }}>
      <View
        style={{
          ...commonStyles.alignJustifyCenter,
          width: moderateScale(160),
          alignSelf: 'center',
          backgroundColor: colors.pink,
          borderRadius: moderateScale(16),
          height: moderateScaleVertical(32),
          position: 'absolute',
          top: -15,
          zIndex: 1,
        }}>
        <Text
          style={{
            ...commonStyles.font14,
            color: colors.white,
          }}>
          {strings.MOST_POPULAR}
        </Text>
      </View>
      <ImageBackground
        source={imagePath.ic_plan_select_bg}
        resizeMode="cover"
        style={{
          height: moderateScale(320),
          borderRadius: moderateScale(24),
          width: moderateScale(200),
          paddingHorizontal: moderateScale(16),
          overflow: 'hidden',
        }}>
        <View
          style={{
            paddingHorizontal: moderateScale(12),
          }}>
          <Text
            style={{
              ...commonStyles.boldFont24,
              fontSize: textScale(48),
              color: colors.white,
              marginTop: moderateScaleVertical(32),
              lineHeight: 60,
            }}>
            30
          </Text>
          <Text
            style={{
              ...commonStyles.mediumFont20,
              color: colors.white,
            }}>
            {strings.SPOTLIGHTS}
          </Text>
          <Text
            style={{
              ...commonStyles.mediumFont20,
              fontSize: textScale(32),
              color: colors.white,
              marginTop: moderateScaleVertical(16),
              lineHeight: 50,
            }}>
            ₹29.97
          </Text>
          <Text
            style={{
              ...commonStyles.mediumFont20,
              color: colors.white,
            }}>
            {strings.PER_SPOTLIGHT}
          </Text>
        </View>
        <ButtonWithLoader
          onPress={onPressActivePlan}
          btnText="Save 49%"
          btnTxtStyle={{
            color: colors.themeColor,
          }}
          btnStyle={{
            backgroundColor: colors.white,
            height: moderateScaleVertical(32),
            marginTop: moderateScaleVertical(24),
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default React.memo(SubscriptionPlanVerticalCard);

const styles = StyleSheet.create({});
