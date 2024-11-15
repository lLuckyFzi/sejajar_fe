import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from './screens/Auth/LoginScreen'
import RegisterScreen from './screens/Auth/RegisterScreen'

const Stack = createNativeStackNavigator()

function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false, }} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false, }} />
        </Stack.Navigator>
    )
}

export default MainStack