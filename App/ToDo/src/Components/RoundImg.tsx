import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  View,
  ImageURISource,
} from 'react-native';
import React, {FC} from 'react';
import imagePath from '../constants/imagePath';
import {moderateScale} from '../styles/responsiveSize';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  imgSrc?: ImageURISource;
  heightWidth?: number;
  imgStyle?: object;
}

const RoundImg: FC<Props> = props => {
  const {
    imgSrc = imagePath.ic_example_user,
    heightWidth = moderateScale(48),
    imgStyle = {},
  } = props;
  return (
    <Image
      source={imgSrc}
      style={{
        height: heightWidth,
        width: heightWidth,
        borderRadius: heightWidth / 2,
        ...imgStyle,
      }}
    />
  );
};

export default React.memo(RoundImg);

const styles = StyleSheet.create({});
