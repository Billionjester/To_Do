import {
  GestureResponderEvent,
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from 'react-native';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import commonStyles from '../styles/commonStyles';
import imagePath from '../constants/imagePath';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
import ButtonWithLoader from './ButtonWithLoader';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  btnStyle?: object;
  leftImgSrc?: ImageURISource;
  rightImgSrc?: ImageURISource;
  btnText?: string;
  mainContainerStyle?: object;
  isDesc?: boolean;
  desc?: string;
  mainViewStyle?: object;
  isCustomRight?: boolean;
  isRightImg?: boolean;
  btnTxtStyle?: object;
  disabled?: boolean;
}

const LeftRightImgButton: FC<Props> = props => {
  const {
    leftImgSrc = imagePath.ic_my_plans,
    rightImgSrc = imagePath.ic_arrow_right,
    btnText = '',
    onPress = () => {},
    mainContainerStyle = {},
    isDesc = false,
    desc = '',
    mainViewStyle = {},
    isCustomRight = false,
    isRightImg = true,
    btnTxtStyle = {},
    disabled = false,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={{
        flexDirection: 'row',
        ...mainContainerStyle,
      }}>
      <Image source={leftImgSrc} />
      <View style={{...styles.mainViewStyle, ...mainViewStyle}}>
        <View>
          <Text style={{...commonStyles.font15, ...btnTxtStyle}}>
            {btnText}
          </Text>
          {!!isDesc && (
            <Text
              style={{
                ...commonStyles.font13,
                color: colors.textGrey,
              }}>
              {desc}
            </Text>
          )}
        </View>
        {isCustomRight ? (
          <ButtonWithLoader
            btnText="Link"
            btnTxtStyle={{
              ...commonStyles.font13,
              color: colors.black,
            }}
            btnStyle={styles.linkBtnStyle}
          />
        ) : (
          isRightImg && <Image source={rightImgSrc} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(LeftRightImgButton);

const styles = StyleSheet.create({
  mainViewStyle: {
    ...commonStyles.flexRowSpaceBtwn,
    marginLeft: moderateScale(16),
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: moderateScaleVertical(14),
    borderColor: colors.borderColor,
  },
  linkBtnStyle: {
    width: moderateScale(72),
    height: moderateScaleVertical(32),
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(8),
  },
});
