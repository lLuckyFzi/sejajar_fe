import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from './screens/Auth/LoginScreen'
import RegisterScreen from './screens/Auth/RegisterScreen'
import InsertEmail from './screens/Auth/ForgotPassword/InsertEmail'
import PasswordOTP from './screens/Auth/ForgotPassword/PasswordOTP'
import NewPassword from './screens/Auth/ForgotPassword/NewPassword'

const Stack = createNativeStackNavigator()

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

            
        </Stack.Navigator>
    )
}

export default MainStack