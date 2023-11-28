import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import notifee from '@notifee/react-native';

import MainButton from '../../components/mainButton/MainButton';
 
const Profile = () => {
    async function onDisplayNotification(messageTitle) {
        await notifee.requestPermission()    
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
            await notifee.displayNotification({
          title: "Profile Changed",
          body: `${messageTitle} selected!`,
          android: {
            channelId,
            pressAction: {
              id: 'default',
            },
          },
        });
    }
  return (
    <SafeAreaView showsVerticalScrollIndicator={false}>
      <View style={{ paddingTop: 20 }}>
       <MainButton title="UI/UX Designer" onPress={()=> onDisplayNotification("UI/UX Designer")}/>
       <MainButton title="UI Designer" style={{marginTop:20}} onPress={()=> onDisplayNotification("UI Designer")}/>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
