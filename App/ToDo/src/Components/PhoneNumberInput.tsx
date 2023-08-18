import React, { FC } from 'react';
import {
  ActivityIndicator,
  ColorValue,
  GestureResponderEvent,
  Image,
  ImageURISource,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';

interface Props {
  mainContainerStyle?: object;
  onChangeText?: (text: string) => void;
  onGetOtp?: (event: GestureResponderEvent) => void;
  onCountryChange?: (event: GestureResponderEvent) => void;
  placeHolder?: string;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  isLoading?: boolean;
  indicatorSize?: number;
  loaderColor?: ColorValue;
  value?: string;
}

const PhoneNumberInput: FC<Props> = props => {
  const {
    mainContainerStyle = {},
    onChangeText = () => { },
    onGetOtp = () => { },
    onCountryChange = () => { },
    placeHolder = strings.PHONE_NUMBER,
    maxLength = undefined,
    keyboardType = 'number-pad',
    isLoading = false,
    indicatorSize = 20,
    loaderColor = colors.themeColor,
    value = '',
  } = props;

  return (
    <View style={{ ...styles.mainContainer, ...mainContainerStyle }}>


      <Text
        style={{
          ...commonStyles.font16,

        }}>
        +91
      </Text>


      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.txtInputStyle}
        // placeholder={placeHolder}
        placeholderTextColor={colors.textGrey}
        maxLength={maxLength}
        keyboardType={keyboardType}
      />

    </View>
  );
};

export default React.memo(PhoneNumberInput);

const styles = StyleSheet.create({
  mainContainer: {
    height: moderateScaleVertical(55),
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    flexDirection: 'row',
    alignItems: "center"
  },

  txtInputStyle: {
    marginLeft: moderateScale(12)
  },

});
