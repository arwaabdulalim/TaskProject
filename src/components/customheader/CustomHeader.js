import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import IconButton from '../iconButton/IconButton';

const CustomHeader = ({headerTitle}) => {
  return (
    <View style={styles.headerWrapper}>
    <Image source={require('../../assets/images/headerImg.png')} style={styles.image}/>
    <Text style={styles.title}>{headerTitle}</Text>
    <IconButton iconName='bell' iconSize={20}/>
    </View>
  );
};
export default CustomHeader;