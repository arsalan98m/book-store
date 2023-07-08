import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ColorValue,
  TextStyle,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {SvgProps} from 'react-native-svg';

import FONT_FAMILY from '../utils/font_family';

type Props = {
  btnText: string;
  btnColor: ColorValue;
  btnWidth?: number;
  btnHeight?: number;
  btnRadius?: number;

  btnTextColor?: ColorValue;
  btnTextFontSize?: number;
  btnTextFontWeight?: TextStyle['fontWeight'];

  BtnIcon?: React.FC<SvgProps>;
  btnIconWidth?: number;
  btnIconHeight?: number;

  onPressHandler: () => void;
};

const PrimaryButton = (props: Props) => {
  const {
    btnText,
    btnColor,
    btnWidth,
    btnHeight,
    btnRadius,
    btnTextColor,
    btnTextFontSize,
    btnTextFontWeight,
    BtnIcon,
    btnIconHeight,
    btnIconWidth,
    onPressHandler,
  } = props; // Destructure the props and set a default value for secureTextEntry

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={{
        ...styles.container,
        backgroundColor: btnColor,
        width: btnWidth ?? '100%',
        height: moderateScale(btnHeight ?? 45),
        borderRadius: moderateScale(btnRadius ?? 10),
      }}>
      <Text
        style={{
          color: btnTextColor ?? '#000',
          fontFamily: FONT_FAMILY.PoppinsMedium,
          fontSize: moderateScale(btnTextFontSize ?? 12),
          fontWeight: btnTextFontWeight ?? '500',
          lineHeight: moderateScale(24),
        }}>
        {btnText}
      </Text>

      {BtnIcon != null ? (
        <BtnIcon
          style={styles.icon}
          width={moderateScale(btnIconWidth ?? 10)}
          height={moderateScale(btnIconHeight ?? 10)}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: moderateScale(13),
  },
});
