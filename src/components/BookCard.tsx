import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import {
  moderateScale,
  scale,
  moderateVerticalScale,
} from 'react-native-size-matters';

import FONT_FAMILY from '../utils/font_family';
import {Book} from '../models/book';
import StarRating from './StarRating';
import Asset_utils from '../utils/asset_utils';

type Props = {
  index: number;
  item: Book;
  onPressHandler: () => void;
};

const BookCard = (props: Props) => {
  const {index, item, onPressHandler} = props;

  const LikedIcon = item.is_liked
    ? Asset_utils.HeartIcon
    : Asset_utils.HeartOutlinedIcon;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressHandler}
      style={{
        ...styles.container,
        marginLeft: (index + 1) % 2 == 0 ? moderateScale(23.63) : 0,
      }}>
      {/* Book Image */}
      <ImageBackground
        source={{uri: item.imageLink}}
        // resizeMode="contain"
        style={styles.bookImage}>
        <View
          style={{
            width: moderateScale(25),
            height: moderateScale(25),
            backgroundColor: '#fff',
            borderRadius: moderateScale(25 / 2),
            alignSelf: 'flex-end',
            marginTop: moderateVerticalScale(10.5),
            marginRight: moderateScale(7),
            justifyContent: 'center',
          }}>
          <LikedIcon
            style={{
              width: moderateScale(15.1),
              height: moderateScale(13),
              alignSelf: 'center',
            }}
          />
        </View>
      </ImageBackground>

      <View style={{marginTop: moderateVerticalScale(5)}} />

      {/* Title  */}
      <Text style={styles.bookTitle}>{item.title}</Text>

      <View style={{marginTop: moderateVerticalScale(5)}} />

      {/* Star Rating */}
      <View style={styles.ratingContainer}>
        <StarRating rating={item.rating} />
        <View style={{width: moderateScale(6)}} />
        <Text style={styles.ratingText}>({item.reviews})</Text>
      </View>

      <View style={{marginTop: moderateVerticalScale(5)}} />

      {/* Price */}
      <Text style={styles.priceText}>$ {item.price}</Text>
    </TouchableOpacity>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(290),
    // flex: 1,
    flex: 0.5,
    // alignSelf: 'flex-start',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    // flexShrink: 0,
    // flexGrow: 0,

    // width: '50%',
  },

  bookImage: {
    height: moderateScale(219),
    borderRadius: moderateScale(10),
    width: '100%',
    overflow: 'hidden',
    // borderColor: 'red',
    // borderWidth: 2,
    // resizeMode: 'cover',
  },
  bookTitle: {
    color: '#000',
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    fontSize: scale(14),
    fontWeight: '600',
    lineHeight: moderateScale(21),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  ratingText: {
    color: '#b2b2b2',
    fontFamily: FONT_FAMILY.PoppinsRegular,
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: moderateScale(18),
  },
  priceText: {
    color: '#000',
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontSize: scale(12),
    lineHeight: moderateScale(18),
    fontWeight: '500',
  },
});
