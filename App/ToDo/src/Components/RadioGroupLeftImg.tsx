import React, {FC, useState} from 'react';
import {GestureResponderEvent, ImageURISource} from 'react-native';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

export interface activeRadioObject {
  id: number;
  title: string;
  image: ImageURISource;
  imageActive: ImageURISource;
}

interface Props {
  activeRadio?: activeRadioObject;
  radioData?: activeRadioObject[];
  onPress?: (event: activeRadioObject) => void;
  isLeftImage?: boolean;
}

const RadioGroup: FC<Props> = props => {
  const {
    activeRadio,
    radioData = [],
    onPress = () => {},
    isLeftImage = true,
  } = props;

  return (
    <View>
      <FlatList
        data={radioData}
        contentContainerStyle={{
          marginTop: moderateScaleVertical(16),
        }}
        scrollEnabled={false}
        ItemSeparatorComponent={() => (
          <View style={{height: moderateScaleVertical(16)}} />
        )}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => onPress(item)}
            style={{
              ...styles.radioContainer,
              backgroundColor:
                activeRadio?.id === item?.id
                  ? colors.themeColor
                  : colors.transparent,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              {!!isLeftImage && (
                <Image
                  source={
                    activeRadio?.id === item?.id
                      ? item?.imageActive
                      : item.image
                  }
                  style={{
                    marginRight: moderateScale(20),
                  }}
                />
              )}
              <Text
                style={{
                  ...commonStyles.font14,
                  color:
                    activeRadio?.id === item?.id ? colors.white : colors.black,
                }}>
                {item?.title}
              </Text>
            </View>
            <Image
              source={
                activeRadio?.id === item?.id
                  ? imagePath.ic_radio_fill
                  : imagePath.ic_radio_empty
              }
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default React.memo(RadioGroup);

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderColor,
    height: moderateScaleVertical(55),
    borderRadius: moderateScale(15),
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    justifyContent: 'space-between',
  },
});
