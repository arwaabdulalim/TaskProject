import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './styles'
import SectionHeader from '../sectionHeader/SectionHeader';

const Vacancies = () => {
    return (
         <View>
        <SectionHeader title="My Vacancies" text="See All"/>
        <View style={styles.container}>
           <Image source={require('../../assets/images/airbnb.png')} style={styles.image}/> 
           <View style={styles.detailsWrapper}>
            <Text style={styles.vacancytxt}>UI/UX Designer</Text>
            <Text style={styles.platformtxt}>AirBNB</Text>
            <Text style={styles.countrytxt}>United States - Full Time</Text>
            <Text style={styles.currencytxt}>$2.350</Text>
           </View>
           <View style={styles.statusContainer}>
            <Text style={styles.statusTxt}>Active</Text>
           </View>
        </View>
         </View>
    )
};

export default Vacancies;