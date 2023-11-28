import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
} from 'react-native';
 
const Menu = () => {
  return (
    <SafeAreaView showsVerticalScrollIndicator={false}>
      <View style={{ paddingTop: 20 }}>
       <Text>This is the Menu screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
