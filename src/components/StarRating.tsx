import React from 'react';
import {View} from 'react-native';
import AssetUtils from '../utils/asset_utils';
import {moderateScale} from 'react-native-size-matters';

type Props = {
  rating: number;
};

const StarRating = (props: Props) => {
  const {rating} = props;

  const renderStars = () => {
    const stars = [];
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      const StarComponent =
        i <= rating ? AssetUtils.StarIcon : AssetUtils.StarIconEmpty;
      stars.push(
        <StarComponent
          key={i}
          width={moderateScale(16)}
          height={moderateScale(16)}
        />,
      );
    }

    return stars;
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {renderStars()}
    </View>
  );
};

export default StarRating;
