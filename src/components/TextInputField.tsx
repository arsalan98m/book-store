import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardTypeOptions,
  ColorValue,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {SvgProps} from 'react-native-svg';

import FONT_FAMILY from '../utils/font_family';

type Props = {
  placeholder: string;
  placeholderColor: ColorValue;
  onChangeText: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  RightIcon: React.FC<SvgProps>;
  iconWidth: number;
  iconHeight: number;
};

const TextInputField = (props: Props) => {
  const {
    placeholder,
    placeholderColor,
    keyboardType,
    onChangeText,
    iconWidth,
    iconHeight,
    RightIcon,
  } = props; // Destructure the props and set a default value for secureTextEntry

  return (
    <View style={styles.container}>
      <View style={styles.textFieldContainer}>
        <RightIcon
          width={moderateScale(iconWidth)}
          height={moderateScale(iconHeight)}
        />
        <TextInput
          placeholder={placeholder}
          style={styles.textFieldInput}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderColor}
          textAlignVertical="center"
          multiline={true}
        />
      </View>
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
    height: moderateScale(45),
    borderRadius: moderateScale(100),
    marginHorizontal: moderateScale(20),
  },
  textFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16.24),
    overflow: 'hidden',
    height: '100%',
  },

  textFieldInput: {
    padding: 0,
    fontSize: scale(14),
    color: 'rgba(0,0,0,0.8)',
    flex: 1,
    marginLeft: moderateScale(15.48),
    fontFamily: FONT_FAMILY.PoppinsRegular,
    fontWeight: '400',
    alignSelf: 'center',
    height: '100%',
    marginTop: moderateVerticalScale(5),
  },
});
