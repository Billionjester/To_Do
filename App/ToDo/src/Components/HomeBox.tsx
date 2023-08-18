import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import colors from '../styles/colors'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'
import commonStyles from '../styles/commonStyles'

interface Props {
    title?: string;
    container?: object;
    description?: string

}


const HomeBox: FC<Props> = props => {
    const {
        title = '',
        container = {},
        description = ''
    } = props;

    return (
        <View style={{ ...styles.container, ...container }}>
            <Text style={{ ...commonStyles.font13, color: colors.textGrey1 }}>{title}</Text>
            <Text style={commonStyles.mediumFont17}>{description}</Text>
        </View>
    )
}

export default React.memo(HomeBox);

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        backgroundColor: colors.greyBackground,
        borderRadius: moderateScale(12),
        padding: moderateScaleVertical(8),

    }
})