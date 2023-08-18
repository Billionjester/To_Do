import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

interface Props {
  txtStyle?: {};
  onPressTxt?: (event: GestureResponderEvent) => void;
  btnTxt?: string;
  btnStyle?: object;
}

const TextButton: FC<Props> = props => {
  const {
    txtStyle = {},
    onPressTxt = () => {},
    btnTxt = '',
    btnStyle = {},
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPressTxt}
      style={{...btnStyle}}>
      <Text
        style={{
          ...commonStyles.mediumFont12,
          color: colors.themeColor,
          ...txtStyle,
        }}>
        {btnTxt}
      </Text>
    </TouchableOpacity>
  );
};
export default React.memo(TextButton);

const styles = StyleSheet.create({});
