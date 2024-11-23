import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Tag from '../../../components/Tag/Tag'
import AppText from '../../../components/Text/Text'

function CardArtikel(props) {
    const { category, title } = props

    return (
        <ImageBackground style={styles.artikelCard} source={require("../../../assets/Images/pictures/artikel-example.png")}>
            <LinearGradient
                style={styles.linear}
                colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.8)']}>
                <Tag title={category} />
                <AppText style={styles.artikelTitle} size={14} fontFamily='Raleway-Bold'>
                    {title || 'Title'}
                </AppText>
            </LinearGradient>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    artikelCard: {
        width: 250,
        height: 115,
        borderRadius: 12,
        overflow: 'hidden',
        marginRight: 5,
        marginLeft: 10
    },
    linear: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 12
    },
    artikelTitle: {
        color: 'white',
    }
})

export default CardArtikel