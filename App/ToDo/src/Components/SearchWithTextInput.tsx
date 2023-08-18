import React, {FC} from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import ImageButton from './ImageButton';

interface Props {
  onPressLeft?: (event: GestureResponderEvent) => void;
  placeholder?: string;
  heightWidth?: number;
  textStyle?: object;
  mainContainerStyle?: object;
  placeholderTextColor?: ColorValue;
  onChangeText?: (text: string) => void;
}

const SearchWithTextInput: FC<Props> = props => {
  const {
    mainContainerStyle = {},
    placeholder = '',
    placeholderTextColor = colors.textGrey,
    onChangeText = () => {},
  } = props;

  return (
    <View
      style={{
        ...styles.mainContainer,
        ...mainContainerStyle,
      }}>
      <TextInput
        style={{
          flex: 1,
        }}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      <ImageButton imgSrc={imagePath.ic_search_grey} />
    </View>
  );
};

export default SearchWithTextInput;

const styles = StyleSheet.create({
  mainContainer: {
    ...commonStyles.flexRowSpaceBtwn,
    height: moderateScaleVertical(56),
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(16),
    paddingHorizontal: moderateScale(16),
  },
});
