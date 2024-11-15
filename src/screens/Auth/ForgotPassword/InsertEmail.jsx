import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Colors } from '../../../contants'
import AppText from '../../../components/Text/Text'
import Input from '../../../components/Inputs/Input'
import PrimaryButton from '../../../components/Buttons/Button'

function InsertEmail() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <AppText fontFamily='Raleway-Bold' size={32}>Reset Password</AppText>
                    <AppText fontFamily='Montserrat-Regular' size={14}>Masukkan Email yang terhubung dengan akun anda, lalu kami akan mengirim email untuk mengubah password mu</AppText>
                </View>
                <View style={styles.formContainer}>
                    <Input label="Email" placeholder="Masukkan Email" />
                    <PrimaryButton onPress={() => navigation.navigate('PasswordOTPScreen')}>Kirim</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
        backgroundColor: Colors.bgColor
    },

    content: {
        flexDirection: 'column',
        gap: 25,
    },

    formContainer: {
        flexDirection: 'column',
        gap: 20,
    }
})

export default InsertEmail