import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

function Input(props) {
    const { label, secureTextEntry, ...otherInputProps } = props

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput secureTextEntry={secureTextEntry} style={styles.input} placeholder='Placeholder' {...otherInputProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 8,
    },

    label: {
        fontSize: 14,
        fontFamily: 'Raleway-SemiBold',
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