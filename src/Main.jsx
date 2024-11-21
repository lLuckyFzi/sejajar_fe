import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from './screens/Auth/LoginScreen'
import RegisterScreen from './screens/Auth/RegisterScreen'
import InsertEmail from './screens/Auth/ForgotPassword/InsertEmail'
import PasswordOTP from './screens/Auth/ForgotPassword/PasswordOTP'
import NewPassword from './screens/Auth/ForgotPassword/NewPassword'
import Home from './screens/Home/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Schedule from './screens/Schedule/Schedule'
import Chats from './screens/Chats/Chats'
import Transaction from './screens/Transaction/Transaction'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    // let iconName;

                    // if (route.name === 'Home') {
                    //     iconName = focused ? 'home' : 'home-outline';
                    // } else if (route.name === 'Profile') {
                    //     iconName = focused ? 'account' : 'account-outline';
                    // } else if (route.name === 'Settings') {
                    //     iconName = focused ? 'cog' : 'cog-outline';
                    // }

                    // return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { height: 60, borderTopLeftRadius: 15, borderTopRightRadius: 15 },
            })}
        >
            <Tab.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
            <Tab.Screen name="Chats" component={Chats} options={{ headerShown: false }} />
            <Tab.Screen name="Transaction" component={Transaction} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false, }} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false, }} />

            {/* Forgot Password Stack */}
            <Stack.Screen name='InsertEmailScreen' component={InsertEmail} options={{ headerShown: false, }} />
            <Stack.Screen name='PasswordOTPScreen' component={PasswordOTP} options={{ headerShown: false, }} />
            <Stack.Screen name='NewPasswordScreen' component={NewPassword} options={{ headerShown: false, }} />
            {/* End Forgot Password Stack */}

            <Stack.Screen name='HomeTabs' component={HomeTabs} options={{ headerShown: false, }} />

        </Stack.Navigator>
    )
}

export default MainStack