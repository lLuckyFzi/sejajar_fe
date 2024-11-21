import React from 'react'
import Input from '../../components/Inputs/Input'
import { useNavigation } from '@react-navigation/native'
import PrimaryButton, { TextButton } from '../../components/Buttons/Button'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../contants'

function LoginScreen() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: Colors.bgColor,
        }}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/Images/logo/sejajar_logo.png')} />
                <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>Masuk</Text>
                        <Text style={styles.description}>Selamat Datang Kembali!</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Input label="No Telepon" placeholder="Masukkan No Telepon" />
                        <Input secureTextEntry label="Password" placeholder="Masukkan Password" />
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <TextButton textAlign="right" onPress={() => navigation.navigate('InsertEmailScreen')}>Lupa Password?</TextButton>
                        </View>

                        <PrimaryButton style={{ marginTop: 20 }} onPress={() => navigation.navigate("HomeTabs")}>Masuk</PrimaryButton>
                    </View>

                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerContent}>Tidak Punya Akun?</Text>
                <TextButton size={16} style={{ fontFamily: 'Raleway-SemiBold' }} onPress={() => navigation.navigate('RegisterScreen')}>Daftar</TextButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,
        paddingHorizontal: 25,
        justifyContent: 'center',
        gap: 20,
        position: 'relative',
        height: '95%',
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
        marginBottom: 20
    },
    footerContent: {
        fontSize: 16,
        fontFamily: 'Raleway-SemiBold',
    }
})

export default LoginScreen