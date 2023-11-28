import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';

import styles from './styles';
import IconButton from '../../components/iconButton/IconButton';
import CustomHeader from '../../components/customheader/CustomHeader';
import InputField from '../../components/inputField/InputField';
import Vacancies from '../../components/vacancies/Vacancies';
import Applicants from '../../components/applicants/Applicants';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import colors from '../../themes/colors';

const Home = () => {
  const [applicants, setApplicants] = useState([
    {
      name: 'Adam Smith',
      vacancy: 'UI/UX Designer',
      imageSource: require('../../assets/images/profile1.png'),
    },
    {
      name: 'Sarah Wilson',
      vacancy: 'UI Designer',
      imageSource: require('../../assets/images/profile2.png'),
    },
  ]);

  return (
    <SafeAreaView showsVerticalScrollIndicator={false} style={{backgroundColor:colors.white}}>
      <View style={{ paddingTop: 20}}>
        <CustomHeader headerTitle="Welcome, AirBNB!" />
        <View style={styles.searchWrapper}>
          <InputField placeholder="search" />
          <IconButton iconName="filter-variant" iconSize={20} />
        </View>
        <Vacancies />
        <View style={{backgroundColor:colors.light}}>
        <SectionHeader title="Recent People Applied" text="See All" />
    <FlatList
          data={applicants}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Applicants
              name={item.name}
              vacancy={item.vacancy}
              imageSource={item.imageSource}
            />
          )}
        />
    </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
