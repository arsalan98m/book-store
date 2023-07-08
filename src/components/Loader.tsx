import React from 'react';
import Lottie from 'lottie-react-native';
import {moderateScale} from 'react-native-size-matters';

const Loader = () => (
  <Lottie
    style={{
      width: moderateScale(30),
      height: moderateScale(30),
      backgroundColor: 'transparent',
    }}
    source={require('../../assets/loader.json')}
    autoPlay
    loop
  />
);

export default Loader;
