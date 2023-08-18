import React, { FC } from 'react';
import {
  ActivityIndicator,
  ColorValue,
  GestureResponderEvent,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  btnText?: string;
  btnStyle?: object;
  isLoading?: boolean;
  loaderColor?: ColorValue;
  disabled?: boolean;
  btnTxtStyle?: object;
  indicatorSize?: number;
}

const ButtonWithLoader: FC<Props> = props => {
  const {
    onPress = () => { },
    btnText = '',
    btnStyle = {},
    isLoading = false,
    loaderColor = colors.white,
    disabled = false,
    btnTxtStyle = {},
    indicatorSize = 20,
  } = props;

  return (
    <TouchableOpacity
      style={{
        ...styles.btnTouchContainer,
        ...btnStyle,
      }}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}>
      {isLoading ? (
        <ActivityIndicator size={indicatorSize} color={loaderColor} />
      ) : (
        <Text
          style={{
            ...commonStyles.mediumFont14,
            color: colors.white,
            ...btnTxtStyle,
          }}>
          {btnText}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnTouchContainer: {
    backgroundColor: colors.themeColor,
    height: moderateScaleVertical(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
  },
});

export default React.memo(ButtonWithLoader);
