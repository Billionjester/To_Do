import {
  GestureResponderEvent,
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from 'react-native';
import React, {FC} from 'react';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import ButtonWithLoader from './ButtonWithLoader';
import {
  height,
  moderateScale,
  moderateScaleVertical,
} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import WrapperContainer from './WrapperContainer';
import Header2 from './Header2';
import Header from './Header';
import fontFamily from '../styles/fontFamily';
import ButtonWithImage from './ButtonWithImage';
import Slider from '@react-native-community/slider';

interface Props {
  isVisible: boolean;
  onLetsComplete?: (event: GestureResponderEvent) => void;
  onBackBtn?: (event: GestureResponderEvent) => void;
  headerTitle?: string;
  children?: object | any;
}

const ModalEditProfile: FC<Props> = props => {
  const {
    isVisible = false,
    onLetsComplete = () => {},
    onBackBtn = () => {},
    headerTitle = '',
    children,
  } = props;

  return (
    <Modal
      visible={isVisible}
      style={{...styles.modalStyle}}
      transparent={true}
      onRequestClose={onBackBtn}>
      <View style={styles.container}>
        <WrapperContainer>{children}</WrapperContainer>
      </View>
    </Modal>
  );
};

export default React.memo(ModalEditProfile);

const styles = StyleSheet.create({
  modalStyle: {},
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
