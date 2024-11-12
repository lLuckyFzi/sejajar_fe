import React from 'react'
import LoginScreen from './screens/Auth/LoginScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false, }} />
        </Stack.Navigator>
    )
}

export default MainStack