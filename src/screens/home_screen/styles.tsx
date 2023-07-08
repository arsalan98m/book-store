import React from 'react';
import {StyleSheet} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import FONT_FAMILY from '../../utils/font_family';

export const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(20),
  },
  headerTitle: {
    color: '#000',
    fontSize: scale(18),
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    fontWeight: '600',
    lineHeight: moderateScale(27),
  },

  loaderContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},

  bookListContainer: {
    marginRight: moderateScale(21.91),
    marginLeft: moderateScale(20.46),
  },

  bookNotFoundContainer: {justifyContent: 'center', alignItems: 'center'},

  bookNotFoundText: {
    color: '#000',
    fontFamily: FONT_FAMILY.PoppinsRegular,
    fontSize: scale(14),
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {textAlign: 'center', color: '#000'},
  btnContainer: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(10),
  },
});
