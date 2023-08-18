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
  onLetsComplete?: (event: GestureResponderEvent) => void;
  onNotNow?: (event: GestureResponderEvent) => void;
}

const ModalProfileComplete: FC<Props> = props => {
  const {
    isVisible = false,
    onLetsComplete = () => {},
    onNotNow = () => {},
  } = props;

  return (
    <Modal
      visible={isVisible}
      style={{...styles.modalStyle}}
      transparent={true}
      onRequestClose={onNotNow}>
      <View
        style={{
          ...commonStyles.flex1AlignJustifyCenter,
          backgroundColor: colors.blackOpacity60,
        }}>
        <View style={styles.container}>
          <Text style={styles.modalTitle}>{strings.COMPLETE_YOUR_PROFILE}</Text>
          <Text style={styles.modalDesc}>{strings.ATTRACT_RIGHT_PERSON}</Text>
          <View
            style={{
              ...commonStyles.flexRowJustifySpaceBtwn,
              marginTop: moderateScaleVertical(24),
            }}>
            <ButtonWithLoader
              onPress={onNotNow}
              btnText={strings.NOT_NOW}
              btnStyle={{
                flex: 0.5,
                backgroundColor: colors.transparent,
              }}
              btnTxtStyle={{
                color: colors.black,
              }}
            />
            <ButtonWithLoader
              onPress={onLetsComplete}
              btnText={strings.LETS_COMPLETE}
              btnStyle={{
                flex: 0.5,
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(ModalProfileComplete);

const styles = StyleSheet.create({
  modalStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  container: {
    height: moderateScaleVertical(220),
    backgroundColor: colors.white,
    borderRadius: moderateScale(15),
    padding: moderateScale(24),
  },
  modalTitle: {
    ...commonStyles.boldFont16,
    marginTop: moderateScaleVertical(20),
    textAlign: 'center',
  },
  modalDesc: {
    ...commonStyles.font13,
    marginTop: moderateScaleVertical(6),
    textAlign: 'center',
    color: colors.textGrey1,
  },
});
