import React from 'react'
import AppText from '../Text/Text'
import { StyleSheet, View } from 'react-native'

function Tag(props) {
    const { title } = props

    return (
        <View style={styles.container}>
            <AppText fontFamily='Raleway-Regular' size={10}>{title || 'Tag'}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 14,
        paddingVertical: 4,
        alignSelf: 'flex-start',
        borderRadius: 12,
    }
})

export default Tag