import React from 'react'
import { Colors } from '../../contants'
import { Text } from '@react-navigation/elements'
import { StyleSheet, TouchableOpacity } from 'react-native'

export function PrimaryButton(props) {
    const { children, textAlign = 'center', style, ...otherProps } = props

    return (
        <TouchableOpacity style={{ ...styles.container, ...style }} {...otherProps}>
            <Text style={{ textAlign, ...styles.content }}>{children}</Text>
        </TouchableOpacity>
    )
}

export function TextButton(props) {
    const { children, textAlign = 'left', size = 14, style, ...otherProps } = props

    return (
        <TouchableOpacity style={{...styles.textButton, flexDirection: 'row'}} {...otherProps}>
            <Text style={{ ...styles.textButtonContent, textAlign, fontSize: size, ...style }}>{children}</Text>
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
        fontFamily: 'Raleway-SemiBold',
    },

    //Text-Button
    textButton: {},
    textButtonContent: {
        color: Colors.primaryColor,
        fontFamily: 'Raleway-Light',
    }
})

export default PrimaryButton 