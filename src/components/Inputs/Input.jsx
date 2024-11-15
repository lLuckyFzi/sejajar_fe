import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import AppText from '../Text/Text'

function Input(props) {
    const { label, secureTextEntry, ...otherInputProps } = props

    return (
        <View style={styles.container}>
            <AppText style={styles.label} fontFamily='Raleway-SemiBold'>{label}</AppText>
            <TextInput secureTextEntry={secureTextEntry} style={styles.input} placeholder='Placeholder' {...otherInputProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 8,
    },

    input: {
        backgroundColor: "white",
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
    }
})


export default Input