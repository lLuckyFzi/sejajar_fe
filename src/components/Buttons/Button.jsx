import { Text } from '@react-navigation/elements'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../contants'

export function PrimaryButton(props) {
    const { children, textAlign = 'center' } = props

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={{ textAlign, ...styles.content }}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 8,
        paddingVertical: 12
    },
    content: {
        color: "white",
        fontSize: 16,
        fontWeight: '600'
    }
})

export default PrimaryButton 