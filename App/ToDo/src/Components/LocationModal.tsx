import {
  GestureResponderEvent,
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import ButtonWithLoader from './ButtonWithLoader';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

interface Props {
  isVisible: boolean;
  onCurrentLocation?: (event: GestureResponderEvent) => void;
  onNotNow?: (event: GestureResponderEvent) => void;
}

const LocationModal: FC<Props> = props => {
  const {
    isVisible = false,
    onCurrentLocation = () => {},
    onNotNow = () => {},
  } = props;

  return (
    <Modal
      visible={isVisible}
      style={styles.modalStyle}
      transparent={true}
      onRequestClose={onNotNow}>
      <View
        style={{
          ...commonStyles.flex1AlignJustifyCenter,
          paddingHorizontal: moderateScale(20),
          backgroundColor: colors.blackOpacity60,
        }}>
        <View
          style={{
            height: moderateScaleVertical(315),
            backgroundColor: colors.white,
            borderRadius: moderateScale(15),
            padding: moderateScale(24),
          }}>
          <Image source={imagePath.ic_flag} />
          <Text
            style={{
              ...commonStyles.boldFont16,
              marginTop: moderateScaleVertical(20),
            }}>
            {strings.TURN_LOCATION}
          </Text>
          <Text
            style={{
              ...commonStyles.font13,
              marginTop: moderateScaleVertical(6),
            }}>
            {strings.LOCATION_USAGE_DESC}
          </Text>
          <ButtonWithLoader
            onPress={onCurrentLocation}
            btnText={strings.CURRENT_LOCATION}
            btnStyle={{
              marginTop: moderateScaleVertical(36),
            }}
          />
          <ButtonWithLoader
            onPress={onNotNow}
            btnText={strings.NOT_NOW}
            btnStyle={{
              marginTop: moderateScaleVertical(12),
              backgroundColor: colors.transparent,
            }}
            btnTxtStyle={{
              color: colors.black,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(LocationModal);

const styles = StyleSheet.create({
  modalStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
