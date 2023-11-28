import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import colors from '../../themes/colors';

const InputField = ({
  navigation,
  icon,
  containerStyle,
  placeholderStyle,
  placeholder,
  editable,
  ...otherProps
}) => {

  return (
    <View>
      <View style={[styles.container, {...containerStyle}]}>
        <TextInput
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={colors.black}
          {...otherProps}
        />
          <MaterialIcons
            name="search"
            size={25}
            style={styles.icon}
          />
      </View>
    </View>
  );
};
export default InputField;