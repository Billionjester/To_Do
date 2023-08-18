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
}

const ModalPostFilter: FC<Props> = props => {
  const {
    isVisible = false,
    onLetsComplete = () => {},
    onBackBtn = () => {},
  } = props;

  return (
    <Modal
      visible={isVisible}
      style={{...styles.modalStyle}}
      transparent={true}
      onRequestClose={onBackBtn}>
      <View style={styles.container}>
        <WrapperContainer>
          <Header
            leftTitle={strings.FILTER}
            isLeftHeaderTitle
            onPressLeft={onBackBtn}
          />
          <View
            style={{
              paddingHorizontal: moderateScale(20),
            }}>
            <Text
              style={{
                ...commonStyles.mediumFont13,
                fontFamily: fontFamily.semiBold,
              }}>
              {strings.DISCOVERY_SETTINGS}
            </Text>
            <View
              style={{
                ...commonStyles.flexRowJustifySpaceBtwn,
                paddingVertical: moderateScaleVertical(18),
                borderBottomWidth: 1,
                borderColor: colors.borderColor1,
              }}>
              <Text style={{...commonStyles.font13}}>{strings.LOCATION}</Text>
              <ButtonWithImage
                btnText="Los Angeles, CA"
                isLeftImg={false}
                isRightImg
                rightImgSrc={imagePath.ic_arrow_right}
                btnStyle={{
                  borderWidth: 0,
                  height: undefined,
                }}
              />
            </View>
            <View
              style={{
                paddingVertical: moderateScaleVertical(18),
                borderBottomWidth: 1,
                borderColor: colors.borderColor1,
              }}>
              <View
                style={{
                  ...commonStyles.flexRowJustifySpaceBtwn,
                }}>
                <Text style={{...commonStyles.font13}}>
                  {strings.MAXIMUM_DISTANCE}
                </Text>
                <Text style={{...commonStyles.font13}}>10 km.</Text>
              </View>
              <Slider
                value={0.2}
                style={{
                  marginTop: moderateScaleVertical(6),
                }}
                thumbImage={imagePath.ic_slider_thumb}
                thumbTintColor={colors.white}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={colors.pink}
                maximumTrackTintColor={colors.borderColor}
              />
            </View>
            <View
              style={{
                ...commonStyles.flexRowJustifySpaceBtwn,
                paddingVertical: moderateScaleVertical(18),
                borderBottomWidth: 1,
                borderColor: colors.borderColor1,
              }}>
              <Text style={{...commonStyles.font13}}>{strings.SHOW_ME}</Text>
              <ButtonWithImage
                btnText={'Women'}
                isLeftImg={false}
                isRightImg
                rightImgSrc={imagePath.ic_arrow_right}
                btnStyle={{
                  borderWidth: 0,
                  height: undefined,
                }}
              />
            </View>
            <View
              style={{
                paddingVertical: moderateScaleVertical(18),
              }}>
              <View
                style={{
                  ...commonStyles.flexRowJustifySpaceBtwn,
                }}>
                <Text style={{...commonStyles.font13}}>
                  {strings.AGE_RANGE}
                </Text>
                <Text style={{...commonStyles.font13}}>20-30 yrs</Text>
              </View>
              <Slider
                value={0.4}
                style={{
                  marginTop: moderateScaleVertical(6),
                }}
                thumbImage={imagePath.ic_slider_thumb}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={colors.pink}
                maximumTrackTintColor={colors.borderColor}
              />
            </View>
            <View
              style={{
                paddingVertical: moderateScaleVertical(18),
              }}>
              <Text
                style={{
                  ...commonStyles.boldFont13,
                  fontFamily: fontFamily.semiBold,
                }}>
                {strings.ADVANCE_FILTER}
              </Text>

              <Slider
                style={{
                  marginTop: moderateScaleVertical(6),
                }}
                value={0.5}
                thumbImage={imagePath.ic_slider_thumb}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={colors.pink}
                maximumTrackTintColor={colors.borderColor}
              />
            </View>
            <View
              style={{
                ...commonStyles.flexRowJustifySpaceBtwn,
                marginTop: moderateScaleVertical(80),
              }}>
              <ButtonWithLoader
                btnText={strings.RESET}
                btnStyle={{
                  flex: 0.3,
                  backgroundColor: colors.transparent,
                }}
                btnTxtStyle={{
                  color: colors.black,
                }}
              />
              <ButtonWithLoader
                btnText={strings.APPLY}
                btnStyle={{
                  flex: 0.7,
                }}
              />
            </View>
          </View>
        </WrapperContainer>
      </View>
    </Modal>
  );
};

export default React.memo(ModalPostFilter);

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
