import colors from './colors';
import fontFamily from './fontFamily';
import {textScale} from './responsiveSize';

export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};

export default {
  alignJustifyCenter: {
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
  flexRowCenter: {
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
  },
  flexRowSpaceBtwn: {
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
    justifyContent: 'space-between' as 'space-between',
  },
  flex1AlignJustifyCenter: {
    flex: 1,
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
  flexRowJustifySpaceBtwn: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between' as 'space-between',
  },
  font10: {
    fontSize: textScale(10),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont10: {
    fontSize: textScale(10),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },
  boldFont10: {
    fontSize: textScale(10),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },
  font11: {
    fontSize: textScale(11),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont11: {
    fontSize: textScale(11),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },

  boldFont11: {
    fontSize: textScale(11),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },
  font12: {
    fontSize: textScale(12),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont12: {
    fontSize: textScale(12),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },

  boldFont12: {
    fontSize: textScale(12),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },

  font13: {
    fontSize: textScale(13),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont13: {
    fontSize: textScale(13),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },

  boldFont13: {
    fontSize: textScale(13),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },

  font14: {
    fontSize: textScale(14),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont14: {
    fontSize: textScale(14),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },

  boldFont14: {
    fontSize: textScale(14),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },
  font15: {
    fontSize: textScale(15),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont15: {
    fontSize: textScale(15),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },

  boldFont15: {
    fontSize: textScale(15),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },
  font16: {
    fontSize: textScale(16),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont16: {
    fontSize: textScale(16),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },

  boldFont16: {
    fontSize: textScale(16),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },
  font17: {
    fontSize: textScale(17),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont17: {
    fontSize: textScale(17),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },

  boldFont17: {
    fontSize: textScale(17),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },

  font18: {
    fontSize: textScale(18),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont18: {
    fontSize: textScale(18),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },

  boldFont18: {
    fontSize: textScale(18),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },

  font20: {
    fontSize: textScale(20),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont20: {
    fontSize: textScale(20),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },

  boldFont20: {
    fontSize: textScale(20),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },
  font24: {
    fontSize: textScale(24),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont24: {
    fontSize: textScale(24),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },

  boldFont24: {
    fontSize: textScale(24),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },
  font28: {
    fontSize: textScale(28),
    color: colors?.black,
    fontFamily: fontFamily?.regular,
  },
  mediumFont28: {
    fontSize: textScale(28),
    color: colors?.black,
    fontFamily: fontFamily?.medium,
  },

  boldFont28: {
    fontSize: textScale(28),
    color: colors?.black,
    fontFamily: fontFamily?.bold,
  },
};
