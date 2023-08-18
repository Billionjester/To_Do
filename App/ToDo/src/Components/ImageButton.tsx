import React, {FC} from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageURISource,
  Insets,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../constants/imagePath';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  btnStyle?: object;
  imgSrc?: ImageURISource;
  disabled?: boolean;
  hitSlop?: Insets;
}

const ImageButton: FC<Props> = props => {
  const {
    onPress = () => {},
    btnStyle = {},
    imgSrc = imagePath.ic_like,
    disabled = false,
    hitSlop = {},
  } = props;

  return (
    <TouchableOpacity
      style={{
        ...styles.btnTouchContainer,
        ...btnStyle,
      }}
      hitSlop={hitSlop}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}>
      <Image source={imgSrc} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnTouchContainer: {},
});

export default React.memo(ImageButton);
