import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  View,
  ImageURISource,
} from 'react-native';
import React, {FC} from 'react';
import commonStyles from '../styles/commonStyles';
import imagePath from '../constants/imagePath';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import ImageButton from './ImageButton';

interface Props {
  onPressLeft?: (event: GestureResponderEvent) => void;
  centerTitle?: string;
  isCenterImg?: boolean;
  leftImg?: ImageURISource;
  rightImg1?: ImageURISource;
  rightImg2?: ImageURISource;
  headerStyle?: object;
  onPressRightImg1?: (event: GestureResponderEvent) => void;
  onPressRightImg2?: (event: GestureResponderEvent) => void;
  isrightImg1?: boolean;
  isrightImg2?: boolean;
}

const Header2: FC<Props> = props => {
  const {
    leftImg = imagePath.ic_home_logo,
    rightImg1 = imagePath.ic_notification,
    rightImg2 = imagePath.ic_filter,
    headerStyle = {},
    onPressRightImg1 = () => {},
    onPressRightImg2 = () => {},
    isrightImg1 = true,
    isrightImg2 = true,
  } = props;

  return (
    <View
      style={{
        ...commonStyles.flexRowSpaceBtwn,
        height: moderateScaleVertical(60),
        ...headerStyle,
      }}>
      <View>
        <Image source={leftImg} />
      </View>
      <View style={{...commonStyles.flexRowCenter}}>
        {isrightImg1 && (
          <ImageButton
            onPress={onPressRightImg1}
            imgSrc={rightImg1}
            btnStyle={{
              marginRight: moderateScale(24),
            }}
          />
        )}
        {isrightImg2 && (
          <ImageButton onPress={onPressRightImg2} imgSrc={rightImg2} />
        )}
      </View>
    </View>
  );
};

export default React.memo(Header2);

const styles = StyleSheet.create({});
