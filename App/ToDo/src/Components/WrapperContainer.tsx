import React, { FC } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';
import { isEmpty } from 'lodash';
interface Props {
  headerStyle?: object;
  isLoading?: boolean;
  statusBarColor?: string;
  barStyle?: string | any;
  children?: object | any;
  colorsAry?: string[];
}

const WrapperContainer: FC<Props> = props => {
  const {
    headerStyle = {},
    isLoading = false,
    statusBarColor = colors.skyBlue,
    barStyle = 'dark-content',
    children,
    colorsAry = [],
  } = props;
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <SafeAreaView style={styles.container}>
        {children}
      </SafeAreaView>
      {/* <Loader isLoading={isLoading} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  headerStyle: {
    alignItems: 'center',
    paddingHorizontal: 0,
  },
});

export default React.memo(WrapperContainer);
