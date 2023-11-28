import React from 'react';
import { Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../themes/colors';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';
import IconButton from '../../components/iconButton/IconButton';
import Chat from '../../screens/chat/Chat';
import Menu from '../../screens/menu/Menu';

const Tab = createBottomTabNavigator();

const HomeTabNav = () => {
    const tabBarIconConfig = {
        Home: { iconName: 'home', iconSize: 24, label: 'Home', },
        Profile: { iconName: 'account', iconSize: 24, onPress: () => { Alert.alert('fdsfdsfdsf') } },
        Menu: { iconName: 'format-list-bulleted', iconSize: 24 },
        Chat: { iconName: 'comment-text', iconSize: 24 },
    };

    const labels = {
        Home: { label: 'Home', },
        Profile: { label: 'Profile', },
        Menu: { label: 'Menu', },
        Chat: { label: 'Chat', },
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    paddingHorizontal:20,
                    borderTopColor: 'white',
                    marginHorizontal: 10,
                    paddingTop: Platform.OS === 'ios' ? 30 : 0,
                    borderRadius: 12,
                    backgroundColor: colors.white,
                    marginBottom: 30,
                    height: 60,
                    justifyContent:'space-between',
                    alignItems:'center'
                },
                tabBarIcon: ({ focused }) => {
                    const { iconName, iconSize, label, style, onPress } = tabBarIconConfig[route.name];
                    return <IconButton
                        iconName={iconName}
                        iconSize={iconSize}
                        label={focused ? labels[route.name].label : null }
                        style={focused ? { width: 90, height: 40, justifyContent: 'space-evenly' } : null}
                        onPress={onPress} />;
                },
                tabBarLabel: () => null,
            })}
        >
            <Tab.Screen name={'Home'} component={Home} options={{ headerShown: false }} />
            <Tab.Screen name={'Menu'} component={Menu} />
            <Tab.Screen name={'Chat'} component={Chat} />
            <Tab.Screen name={'Profile'} component={Profile} />
        </Tab.Navigator>
    );
};

export default HomeTabNav;
