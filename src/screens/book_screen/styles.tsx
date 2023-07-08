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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButtonContainer: {
    marginLeft: moderateScale(25),
  },

  bookCardContainer: {
    height: moderateScale(498.04),
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(20),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 5,
  },
  bookCardImage: {
    height: moderateScale(410.04),
    marginHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
  },
  bookCardImageDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  bookCardImageDetails: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookCardImageDetailsText: {
    color: '#000',
    fontSize: scale(14),
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontWeight: '500',
    lineHeight: moderateScale(21),
  },
  bookCardImageDetailsTextSecondary: {
    color: '#b2b2b2',
    fontSize: scale(12),
    fontWeight: '400',
    fontFamily: FONT_FAMILY.PoppinsRegular,
    lineHeight: moderateScale(21),
  },
  bookTitleContainer: {
    marginHorizontal: moderateScale(20),
  },
  bookTitleText: {
    fontSize: scale(22),
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    fontWeight: '600',
    color: '#000',
    lineHeight: moderateScale(33),
  },
  bookInfoContainer: {
    marginHorizontal: moderateScale(20),
  },
  bookInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookInfoLabel: {
    fontSize: scale(16),
    fontFamily: FONT_FAMILY.PoppinsRegular,
    fontWeight: '400',
    color: '#000',
  },
  bookInfoValue: {
    fontSize: scale(16),
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontWeight: '500',
    color: '#000',
  },
  btnContainer: {
    marginHorizontal: moderateScale(20),
  },
});
