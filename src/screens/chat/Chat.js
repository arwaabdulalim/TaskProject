import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
} from 'react-native';
 
const Chat = () => {
  return (
    <SafeAreaView showsVerticalScrollIndicator={false}>
      <View style={{ paddingTop: 20 }}>
       <Text>This is the Chat screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
