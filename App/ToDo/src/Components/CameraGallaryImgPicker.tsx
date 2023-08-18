import React, { FC } from 'react';
import {
  GestureResponderEvent,
  Modal,
  StyleSheet,
  Text,
  View
} from 'react-native';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical
} from '../styles/responsiveSize';
import ButtonWithImage from './ButtonWithImage';
import ImageButton from './ImageButton';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  isVisible?: boolean;
  onCloseReportUserModal?: (event: GestureResponderEvent) => void;
  onPhotoGallery?: (event: GestureResponderEvent) => void;
  onCamera?: (event: GestureResponderEvent) => void;
}

const CameraGallaryImgPicker: FC<Props> = props => {
  const {
    onPress = () => { },
    isVisible = false,
    onCloseReportUserModal = () => { },
    onPhotoGallery = () => { },
    onCamera = () => { },
  } = props;

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      onRequestClose={onCloseReportUserModal}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: colors.blackOpacity80,
        }}>
        <View style={styles.container}>
          <View
            style={{
              ...commonStyles.flexRowJustifySpaceBtwn,
            }}>
            <Text
              style={{
                ...commonStyles.boldFont16,
              }}>
              {strings.SELECT_TYPE}
            </Text>
            <ImageButton
              imgSrc={imagePath.ic_close_circle}
              onPress={onCloseReportUserModal}
            />
          </View>
          <ButtonWithImage
            onPress={onPhotoGallery}
            leftImgSrc={imagePath.ic_gallery}
            btnText={strings.PHOTO_GALLERY}
            btnStyle={{
              borderWidth: 0,
              marginTop: moderateScaleVertical(10),
            }}
            leftImgStyle={{
              marginRight: moderateScale(16),
            }}
            mainViewStyle={{
              justifyContent: 'flex-start',
            }}
            btnTxtStyle={{
              marginLeft: moderateScale(60),
            }}
          />
          <ButtonWithImage
            onPress={onCamera}
            leftImgSrc={imagePath.ic_camera_black}
            btnText={strings.CAMERA}
            btnStyle={{
              borderWidth: 0,
            }}
            mainViewStyle={{
              justifyContent: 'flex-start',
            }}
            leftImgStyle={{
              marginRight: moderateScale(16),
            }}
            btnTxtStyle={{
              marginLeft: moderateScale(60),
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(CameraGallaryImgPicker);

const styles = StyleSheet.create({
  container: {
    height: moderateScaleVertical(200),
    backgroundColor: colors.white,
    borderTopLeftRadius: moderateScale(25),
    borderTopRightRadius: moderateScale(25),
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
