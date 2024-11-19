import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Colors } from '../../contants'

/**
 * @typedef {"Montserrat-Light" | "Montserrat-Regular" | "Montserrat-Medium" | "Montserrat-SemiBold" | "Montserrat-Bold" | "Montserrat-Black" | "Raleway-Light" | "Raleway-Regular" | "Raleway-SemiBold" | "Raleway-Bold" | "Raleway-Black"} FontFamily
 */

/**
 * @typedef {import('react-native').TextStyle} TextStyle
 */

/**
 * @typedef {Object} AppTextProps
 * @property {number} [size]
 * @property {FontFamily} [fontFamily]
 * @property {React.ReactNode} [children]
 * @property {TextStyle} [style]
 */

/**
 *
 * @param {AppTextProps} props - Props untuk AppText.
 */

function AppText(props) {
    const { fontFamily, size, children, style, ...otherProps } = props

    return (
        <Text
            {...otherProps}
            style={{ ...styles.appText, ...style, fontFamily, fontSize: size || 14 }}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    appText: {
        color: Colors.dark
    }
})

export default AppText