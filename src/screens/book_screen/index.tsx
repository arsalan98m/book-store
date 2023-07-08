// Libraries/Packages
import React from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// Styles
import {styles} from './styles';
import AssetUtils from '../../utils/asset_utils';
import {RootState} from '../../store';

// Components
import {StarRating, PrimaryButton} from '../../components';

// Type for the navigation object
type RootNavigationProp = NavigationProp<any>; // or NavigationProp<{}> if you prefer

const BookScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const {bookDetail} = useSelector((store: RootState) => store.books);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{marginTop: moderateVerticalScale(20)}} />

        {/* Back Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButtonContainer}>
          <AssetUtils.BackIcon
            width={moderateScale(14)}
            height={moderateScale(14)}
          />
        </TouchableOpacity>

        <View style={{marginTop: moderateVerticalScale(35)}} />

        {/* Book Card */}
        <View style={styles.bookCardContainer}>
          <View style={{marginTop: moderateVerticalScale(20)}} />

          {/* Book Image */}
          <Image
            source={{uri: bookDetail?.imageLink}}
            style={styles.bookCardImage}
          />

          <View style={{marginTop: moderateVerticalScale(10)}} />

          {/* Book Details */}
          <View style={styles.bookCardImageDetailsContainer}>
            {/* Rating */}
            <View style={styles.bookCardImageDetails}>
              <Text style={styles.bookCardImageDetailsText}>Rating</Text>
              <View style={{marginTop: moderateVerticalScale(5)}} />
              <StarRating rating={bookDetail!.rating} />
            </View>

            {/* Reviews */}
            <View style={styles.bookCardImageDetails}>
              <Text style={styles.bookCardImageDetailsText}>Reviews</Text>
              <View style={{marginTop: moderateVerticalScale(5)}} />
              <Text style={styles.bookCardImageDetailsTextSecondary}>
                ({bookDetail?.reviews})
              </Text>
            </View>

            {/* Price */}
            <View style={styles.bookCardImageDetails}>
              <Text style={styles.bookCardImageDetailsText}>Price</Text>
              <View style={{marginTop: moderateVerticalScale(5)}} />
              <Text style={styles.bookCardImageDetailsTextSecondary}>
                ${bookDetail?.price}
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: moderateVerticalScale(20)}} />

        {/* Book Title */}
        <View style={styles.bookTitleContainer}>
          <Text style={styles.bookTitleText}>{bookDetail?.title}</Text>
        </View>

        <View style={{marginTop: moderateVerticalScale(20)}} />

        {/* Book Info */}
        <View style={styles.bookInfoContainer}>
          {/* Author Details */}
          <View style={styles.bookInfo}>
            <Text style={styles.bookInfoLabel}>Author:</Text>
            <Text style={styles.bookInfoValue}> {bookDetail?.author}</Text>
          </View>

          <View style={{marginTop: moderateVerticalScale(5)}} />

          {/* Country */}
          <View style={styles.bookInfo}>
            <Text style={styles.bookInfoLabel}>Country:</Text>
            <Text style={styles.bookInfoValue}> {bookDetail?.country}</Text>
          </View>

          <View style={{marginTop: moderateVerticalScale(5)}} />

          {/* Language */}
          <View style={styles.bookInfo}>
            <Text style={styles.bookInfoLabel}>Language:</Text>
            <Text style={styles.bookInfoValue}> {bookDetail?.language}</Text>
          </View>

          <View style={{marginTop: moderateVerticalScale(5)}} />

          {/* Year */}
          <View style={styles.bookInfo}>
            <Text style={styles.bookInfoLabel}>Year:</Text>
            <Text style={styles.bookInfoValue}> {bookDetail?.year}</Text>
          </View>

          <View style={{marginTop: moderateVerticalScale(5)}} />

          {/* Pages */}
          <View style={styles.bookInfo}>
            <Text style={styles.bookInfoLabel}>Pages:</Text>
            <Text style={styles.bookInfoValue}> {bookDetail?.pages}</Text>
          </View>
        </View>

        <View style={{marginTop: moderateVerticalScale(30)}} />

        {/* View Detail Button */}
        <View style={styles.btnContainer}>
          <PrimaryButton
            btnText="View Details"
            btnColor="#004d6d"
            btnTextColor="#fff"
            btnTextFontSize={16}
            btnTextFontWeight="500"
            btnRadius={100}
            BtnIcon={AssetUtils.ExternalLinkIcon}
            btnIconWidth={24}
            btnIconHeight={24}
            onPressHandler={() => {}}
          />
        </View>

        <View style={{marginTop: moderateVerticalScale(22.96)}} />
      </View>
    </ScrollView>
  );
};

export default BookScreen;
