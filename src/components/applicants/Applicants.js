import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './styles'
import IconButton from '../iconButton/IconButton';
import MainButton from '../mainButton/MainButton';

const Applicants = ({name, vacancy,imageSource}) => {
    return (
         <View>
        <View style={styles.container}>
           <Image source={imageSource} style={styles.image}/> 
           <View style={styles.detailsWrapper}>
           <Text style={styles.applicantname}>{name}</Text>
            <Text style={styles.vacancytxt}>{vacancy}</Text>
           </View>
         <IconButton style={styles.button} iconName="comment-text" iconSize={15}/>
         <IconButton style={styles.button} iconName="video" iconSize={15}/>
        </View>
        <View style={styles.separator}/>
        <View style={styles.buttonsWrapper}>
        <MainButton title="See Resume"/>
        <MainButton style={styles.buttonContainer} title="Search Details" textStyle={styles.label}/>
         </View>
         </View>
    )
};

export default Applicants;