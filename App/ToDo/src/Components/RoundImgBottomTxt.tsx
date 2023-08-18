import {StyleSheet, Text, View, GestureResponderEvent} from 'react-native';
import React, {FC} from 'react';
import RoundImg from './RoundImg';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

interface Props {
  onPressLeft?: (event: GestureResponderEvent) => void;
  centerTitle?: string;
  heightWidth?: number;
  textStyle?: object;
  touchContainerStyle?: object;
}

const RoundImgBottomTxt: FC<Props> = props => {
  const {
    heightWidth = moderateScale(96),
    centerTitle = 'centerTitle',
    textStyle = {},
    touchContainerStyle = {},
  } = props;

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...touchContainerStyle,
      }}>
      <RoundImg heightWidth={heightWidth} />
      <Text
        style={{
          ...commonStyles.font12,
          marginTop: moderateScaleVertical(8),
          ...textStyle,
        }}>
        {centerTitle}
      </Text>
    </View>
  );
};

export default React.memo(RoundImgBottomTxt);

const styles = StyleSheet.create({});
