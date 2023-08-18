import React, { FC } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { moderateScale } from '../styles/responsiveSize';
import ButtonWithLoader from './ButtonWithLoader';

interface tabsData {
  id: number;
  title: string;
}

interface Props {
  tabsData?: tabsData[];
  selectedTab?: tabsData;
  mainContainerStyle?: object;
  onChangeTab?: (event: tabsData) => void;
}

const SwitchableTabs: FC<Props> = props => {
  const {
    tabsData = [],
    onChangeTab = () => { },
    selectedTab,
    mainContainerStyle = {},
  } = props;
  return (
    <View
      style={{
        ...commonStyles.flexRowSpaceBtwn,
        backgroundColor: colors.borderColor1,
        borderRadius: moderateScale(16),
        ...mainContainerStyle,
      }}>
      {tabsData.map((item, index) => (
        <ButtonWithLoader
          key={String(item.id)}
          btnText={item?.title}
          onPress={() => onChangeTab(item)}
          btnTxtStyle={{
            color:
              selectedTab?.id === item?.id ? colors.white : colors.textGrey,
          }}
          btnStyle={{
            flex: 0.5,
            backgroundColor:
              selectedTab?.id === item?.id
                ? colors.themeColor
                : colors.borderColor1,
          }}
        />
      ))}
    </View>
  );
};

export default React.memo(SwitchableTabs);

const styles = StyleSheet.create({});
