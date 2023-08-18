import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';

interface Props {
  marginTop?: number;
  marginBottom?: number;
}

const HorizontalLine: FC<Props> = props => {
  const {marginTop = 0, marginBottom = 0} = props;

  return (
    <View
      style={{
        ...styles.lineStyle,
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    />
  );
};

export default React.memo(HorizontalLine);

const styles = StyleSheet.create({
  lineStyle: {
    height: moderateScale(8),
    backgroundColor: colors.borderColor1,
  },
});
