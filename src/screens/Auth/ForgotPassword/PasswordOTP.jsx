import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Colors } from '../../../contants'
import AppText from '../../../components/Text/Text'
import OTPInput from '../../../components/Inputs/OTPInput'
import PrimaryButton, { TextButton } from '../../../components/Buttons/Button'

function PasswordOTP() {
    const navigation = useNavigation()

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                <View>
                    <AppText fontFamily='Raleway-Bold' size={32}>Masukkan Code OTP</AppText>
                    <AppText fontFamily='Montserrat-Regular' size={14}>4 Digit kode telah kami kirim pada email LuckyFauzi2004@gmail.com</AppText>
                </View>
                <View>
                    <OTPInput onOtpComplete={(v) => console.log(v)} />
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerContent}>Tidak terkirim?</Text>
                <TextButton size={16} style={{ fontFamily: 'Raleway-SemiBold' }} onPress={() => { }}>Kirim Ulang</TextButton>
            </View>
            <PrimaryButton style={{ marginTop: 20 }} onPress={() => navigation.navigate('NewPasswordScreen')}>Konfirmasi</PrimaryButton>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: Colors.bgColor,
    },

    content: {
        flex: 1,
        gap: 25,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    footer: {
        gap: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    footerContent: {
        fontSize: 16
    }
})

export default PasswordOTP