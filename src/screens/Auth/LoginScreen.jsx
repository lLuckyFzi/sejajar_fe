import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import Input from '../../components/Inputs/Input'

function LoginScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../../assets/Images/logo/sejajar_logo.png')} />
                <View style={styles.header}>
                    <Text style={styles.title}>Masuk</Text>
                    <Text style={styles.description}>Selamat Datang Kembali!</Text>
                </View>
                <View style={styles.formContainer}>
                    <Input label="No Telepon" placeholder="Masukkan No Telepon" />
                    <Input label="Password" placeholder="Masukkan Password" />
                    <Text>Lupa Password?</Text>

                    <TouchableOpacity>
                        <Text>Masuk</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>Tidak punya akun?</Text>
                    <Text>Daftar</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 25,
        backgroundColor: '#F9F9F9'
    },

    logo: {
        width: 150,
        height: 40,
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
        fontWeight: '700'
    },
    description: {
        fontSize: 16,
        fontWeight: '400'
    }
})

export default LoginScreen