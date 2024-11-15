import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Colors } from '../../../contants'
import AppText from '../../../components/Text/Text'
import Input from '../../../components/Inputs/Input'
import PrimaryButton from '../../../components/Buttons/Button'

function NewPassword() {
    const navigation = useNavigation()

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                <View>
                    <AppText fontFamily='Raleway-Bold' size={32}>Buat Password Baru</AppText>
                    <AppText fontFamily='Montserrat-Regular' size={14}>Mohon masukkan password yang berbeda dari yang sebelumnya</AppText>
                </View>
                <View style={styles.formContainer}>
                    <Input secureTextEntry label="Password" placeholder="Masukkan Password" />
                    <Input secureTextEntry label="Confirmn Password" placeholder="Confirmn Password" />
                </View>
            </View>

            <PrimaryButton style={{ marginTop: 20 }} onPress={() => navigation.navigate('LoginScreen')}>Konfirmasi</PrimaryButton>
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

    formContainer: {
        gap: 12,
        flexDirection: 'column',
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

export default NewPassword