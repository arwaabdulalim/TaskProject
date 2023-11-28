import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles'

const SectionHeader = ({title,text}) => {
    return (
        <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
        </View>
    )
};

export default SectionHeader;