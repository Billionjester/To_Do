import React, {FC} from 'react';
import {
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

export interface groupItem {
  id: number;
  title: string;
  image: ImageURISource;
  isSelected: boolean;
}
interface Props {
  data?: groupItem[];
  onPress?: (event: groupItem) => void;
  disabled?: boolean;
}

const MultiSelectionGroup: FC<Props> = props => {
  const {data = [], onPress = () => {}, disabled = false} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {data?.map((item, index) => (
        <TouchableOpacity
          disabled={disabled}
          key={String(item?.id)}
          onPress={() => onPress(item)}
          style={{
            ...styles.mainTouchContainer,
            backgroundColor: item?.isSelected
              ? colors.themeColor
              : colors.transparent,
          }}>
          <Image source={item?.image} />
          <Text
            style={{
              ...styles.titleStyle,
              color: item?.isSelected ? colors.white : colors.black,
            }}>
            {item?.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default React.memo(MultiSelectionGroup);

const styles = StyleSheet.create({
  mainTouchContainer: {
    ...commonStyles.flexRowCenter,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(16),
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScaleVertical(8),
    marginRight: moderateScale(16),
    marginBottom: moderateScaleVertical(8),
  },
  titleStyle: {
    ...commonStyles.font14,
    marginLeft: moderateScale(6),
  },
});
