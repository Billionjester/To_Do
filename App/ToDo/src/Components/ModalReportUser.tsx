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
import {
  height,
  moderateScale,
  moderateScaleVertical,
} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {TouchableOpacity} from 'react-native';
import TextInputComp from './TextInputComp';

interface selectedItem {
  id: number;
  title: string;
}

interface Props {
  isVisible: boolean;
  onSelectReason?: (event: selectedItem) => void;
  onCloseReportUserModal?: (event: GestureResponderEvent) => void;
  reportUserReasons?: selectedItem[];
  selectedReportUserReason?: selectedItem;
}

const ModalReportUser: FC<Props> = props => {
  const {
    isVisible = false,
    onSelectReason = () => {},
    reportUserReasons = [],
    selectedReportUserReason,
    onCloseReportUserModal = () => {},
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
          backgroundColor: colors.blackOpacity60,
        }}>
        <View style={styles.container}>
          <View style={{...commonStyles.flexRowJustifySpaceBtwn}}>
            <View>
              <Text
                style={{
                  ...commonStyles.boldFont16,
                }}>
                {strings.REPORT}
              </Text>
              <Text
                style={{
                  ...commonStyles.font12,
                  color: colors.textGrey2,
                }}>
                {strings.WE_DONT_TELL}
              </Text>
            </View>
            <TouchableOpacity onPress={onCloseReportUserModal}>
              <Image source={imagePath.ic_close_circle} />
            </TouchableOpacity>
          </View>
          {reportUserReasons.map(item => (
            <TouchableOpacity
              onPress={() => onSelectReason(item)}
              key={String(item?.id)}
              style={{
                ...commonStyles.flexRowJustifySpaceBtwn,
                marginTop: moderateScaleVertical(16),
              }}>
              <Text style={{...commonStyles.font13}}>{item?.title}</Text>
              <Image
                source={
                  selectedReportUserReason?.id === item?.id
                    ? imagePath.ic_radio_pink
                    : imagePath.ic_radio
                }
              />
            </TouchableOpacity>
          ))}
          {selectedReportUserReason?.id === 8 && (
            <TextInputComp
              placeHolder={strings.WRITE_REASON_HERE}
              mainContainerStyle={{
                marginTop: moderateScaleVertical(16),
                backgroundColor: colors.greyBackground,
              }}
            />
          )}
          <ButtonWithLoader
            btnText={strings.SUBMIT}
            btnStyle={{
              marginTop: moderateScaleVertical(24),
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(ModalReportUser);

const styles = StyleSheet.create({
  container: {
    height: height / 1.4,
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
