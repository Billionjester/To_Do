import React, {FC} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

interface Props {
  onPress?: any;
  btnText?: string;
  btnStyle?: object;
  isLoading?: boolean;
  loaderColor?: string;
  disabled?: boolean;
  btnTxtStyle?: object;
  indicatorSize?: number;
  isLeftImg?: boolean;
  isRightImg?: boolean;
  leftImgSrc?: ImageURISource;
  rightImgSrc?: ImageURISource;
  leftImgStyle?: object;
  mainViewStyle?: object;
}

const ButtonWithImage: FC<Props> = props => {
  const {
    onPress = () => {},
    btnText = '',
    btnStyle = {},
    isLoading = false,
    loaderColor = colors.white,
    disabled = false,
    btnTxtStyle = {},
    indicatorSize = 20,
    isLeftImg = true,
    isRightImg = false,
    leftImgSrc = imagePath.ic_google,
    rightImgSrc = imagePath.ic_back,
    leftImgStyle = {},
    mainViewStyle = {},
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            ...mainViewStyle,
          }}>
          {isLeftImg && (
            <Image
              source={leftImgSrc}
              style={{
                position: 'absolute',
                left: moderateScale(25),
                ...leftImgStyle,
              }}
            />
          )}
          <Text
            style={{
              ...commonStyles.font13,
              color: colors.black,
              ...btnTxtStyle,
            }}>
            {btnText}
          </Text>
          {isRightImg && <Image source={rightImgSrc} />}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnTouchContainer: {
    backgroundColor: colors.transparent,
    height: moderateScaleVertical(50),
    justifyContent: 'center',
    borderRadius: moderateScale(15),
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
});

export default React.memo(ButtonWithImage);
