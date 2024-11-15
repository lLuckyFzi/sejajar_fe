import React from 'react'
import Input from '../../components/Inputs/Input'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, View } from 'react-native'
import PrimaryButton, { TextButton } from '../../components/Buttons/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function RegisterScreen() {
    const navigation = useNavigation()

    return (
        <KeyboardAwareScrollView contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between'
        }}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/Images/logo/sejajar_logo.png')} />
                <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>Daftar</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Input label="Email" placeholder="Masukkan Email" />
                        <Input inputMode='numeric' label="No Telepon" placeholder="Masukkan No Telepon" />
                        <Input secureTextEntry label="Password" placeholder="Masukkan Password" />
                        <Input secureTextEntry label="Confirmn Password" placeholder="Confirmn Password" />

                        <PrimaryButton style={{ marginTop: 20 }}>Daftar</PrimaryButton>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerContent}>Sudah Punya Akun?</Text>
                <TextButton
                    size={16}
                    onPress={() => navigation.goBack()}
                    style={{
                        fontFamily: 'Raleway-SemiBold',
                    }}
                >
                    Masuk
                </TextButton>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,
        paddingHorizontal: 25,
        justifyContent: 'center',
        gap: 20,
        marginTop: 50,
    },

    logo: {
        width: 200,
        height: 55,
        marginBottom: 60,
    },

    formContainer: {
        flexDirection: 'column',
        gap: 16
    },

    header: {
        paddingBottom: 25
    },
    title: {
        fontSize: 32,
        fontFamily: 'Raleway-Bold',
    },
    description: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
    },

    footer: {
        gap: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    footerContent: {
        fontSize: 16,
        fontFamily: 'Raleway-SemiBold',
    }
})

export default RegisterScreen