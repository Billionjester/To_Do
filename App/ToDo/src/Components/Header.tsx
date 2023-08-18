import React, { FC } from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';

interface Props {
  onPressLeft?: (event: GestureResponderEvent) => void;
  centerTitle?: string;
  isCenterImg?: boolean;
  centerImgSrc?: ImageURISource;
  mainContainerStyle?: object;
  isLeftHeaderTitle?: boolean;
  leftTitle?: string;
  CustomRight?: any;
  isCustomRight?: boolean;
  isLeftIcon?: boolean
}

const Header: FC<Props> = props => {
  const {
    onPressLeft = () => { },
    centerTitle = '',
    isCenterImg = false,
    centerImgSrc = imagePath.ic_app_icon_header,
    mainContainerStyle = {},
    isLeftHeaderTitle = false,
    leftTitle = "",
    CustomRight = () => <></>,
    isCustomRight = false,
    isLeftIcon = true
  } = props;

  return (
    <View
      style={{
        ...commonStyles.flexRowSpaceBtwn,
      }}>
      {isLeftHeaderTitle ? (
        <View style={{ ...styles.leftTitleMainContainer }}>
          <TouchableOpacity onPress={onPressLeft} activeOpacity={0.7}>
            <Image source={imagePath.ic_back} />
          </TouchableOpacity>
          <Text style={{ ...styles.leftTitle }}>{leftTitle}</Text>
        </View>
      ) : (
        <View style={{ ...styles.mainContainer, ...mainContainerStyle }}>
          <TouchableOpacity
            onPress={onPressLeft}
            activeOpacity={0.7}
            style={styles.leftTouchContainer}>
            {isLeftIcon && <Image source={imagePath.ic_back} />}
          </TouchableOpacity>
          {isCenterImg ? (
            <Image source={centerImgSrc} />
          ) : (
            <Text style={{ ...styles.centerTitle }}>{centerTitle}</Text>
          )}
        </View>
      )}
      {isCustomRight && (
        <View style={{}}>
          <CustomRight />
        </View>
      )}
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: moderateScaleVertical(60),
  },
  leftTouchContainer: {
    position: 'absolute',
    left: moderateScale(20),
    zIndex: 1,
  },
  leftTitleMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScaleVertical(60),
    paddingHorizontal: moderateScale(20),
  },
  leftTitle: {
    ...commonStyles.font17,
    fontFamily: fontFamily.semiBold,
    marginLeft: moderateScale(10),
  },
  centerTitle: {
    ...commonStyles.mediumFont17,
    marginLeft: moderateScale(10),
  },
});
