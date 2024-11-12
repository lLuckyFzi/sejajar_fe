import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

function Input(props) {
    const { label, ...otherInputProps } = props

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} placeholder='Placeholder' {...otherInputProps} />
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
        fontWeight: '600',
    },
    input: {
        backgroundColor: "white",
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 14
    }
})


export default Input