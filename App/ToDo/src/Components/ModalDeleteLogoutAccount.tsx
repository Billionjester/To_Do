import {
  GestureResponderEvent,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import colors from '../styles/colors';
import {
  height,
  moderateScale,
  moderateScaleVertical,
} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import strings from '../constants/lang';
import imagePath from '../constants/imagePath';
import ButtonWithLoader from './ButtonWithLoader';

interface Props {
  isVisible: boolean;
  onCloseModal?: (event: GestureResponderEvent) => void;
  onPressYes?: (event: GestureResponderEvent) => void;
  customString?: string;
}

const ModalDeleteLogoutAccount: FC<Props> = props => {
  const {
    isVisible = false,
    onCloseModal = () => {},
    onPressYes = () => {},
    customString = strings.ARE_YOU_SURE_TO_LOGOUT,
  } = props;
  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={onCloseModal}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: colors.blackOpacity60,
        }}>
        <View style={styles.container}>
          <View
            style={{
              ...commonStyles.flexRowJustifySpaceBtwn,
              marginBottom: moderateScaleVertical(16),
            }}>
            <Text
              style={{
                ...commonStyles.mediumFont20,
              }}>
              {customString}
            </Text>
            <TouchableOpacity onPress={onCloseModal}>
              <Image source={imagePath.ic_close_circle} />
            </TouchableOpacity>
          </View>
          <ButtonWithLoader onPress={onPressYes} btnText={strings.YES_SURE} />
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(ModalDeleteLogoutAccount);

const styles = StyleSheet.create({
  container: {
    height: moderateScaleVertical(200),
    backgroundColor: colors.white,
    borderTopLeftRadius: moderateScale(25),
    borderTopRightRadius: moderateScale(25),
    padding: moderateScale(24),
  },
});
