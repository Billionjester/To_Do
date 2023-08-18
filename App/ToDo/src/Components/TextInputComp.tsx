import React, { FC } from 'react';
import {
  ColorValue,
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import strings from '../constants/lang';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';

interface Props {
  mainContainerStyle?: object;
  onChangeText?: (text: string) => void;
  placeHolderColor?: ColorValue;
  placeHolder?: string;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  value?: string;
  secureTextEntry?: boolean
}

const TextInputComp: FC<Props> = props => {
  const {
    mainContainerStyle = {},
    onChangeText = () => { },
    placeHolderColor = colors.textGrey,
    placeHolder = strings.VERIFICATION_CODE,
    maxLength = undefined,
    keyboardType = 'default',
    multiline = false,
    value = '',
    secureTextEntry = false
  } = props;

  return (
    <View style={{ ...styles.mainContainer, ...mainContainerStyle }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ paddingHorizontal: moderateScale(10) }}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderColor}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default React.memo(TextInputComp);

const styles = StyleSheet.create({
  mainContainer: {
    height: moderateScaleVertical(55),
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(15),
    justifyContent: 'center',
  },
});
