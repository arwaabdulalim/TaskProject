import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../themes/colors';

const IconButton = ({style, iconName,iconSize,label,onPress}) => {
  return (
    <View style={[styles.button, {...style}]} >
       <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={colors.primary}
        />
       <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default IconButton;