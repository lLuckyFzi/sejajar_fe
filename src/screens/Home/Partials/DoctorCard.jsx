import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'

import { Colors } from '../../../contants'
import AppText from '../../../components/Text/Text'

function DoctorCard(props) {
    const { nama, role, pengalaman } = props

    const width = Dimensions.get('window').width;

    return (
        <View style={{
            ...styles.docterCard,
            width: width * 0.6,
            marginLeft: 25,
            marginRight: 10
        }}>
            <View>
                <AppText
                    style={styles.doctorText}
                    fontFamily="Raleway-SemiBold"
                    size={16}>
                    {nama || 'Nama'}
                </AppText>
                <AppText
                    style={styles.doctorText}
                    size={12}
                    fontFamily="Montserrat-Light">
                    {role || 'Role'}
                </AppText>
            </View>
            <View style={styles.pengalamanContainer}>
                <AppText style={styles.doctorText} fontFamily="Montserrat-Medium" size={12}>
                    Pengalaman
                </AppText>
                <AppText
                    size={10}
                    style={styles.doctorText}
                    fontFamily="Montserrat-Regular">
                    {pengalaman || 0} Thn
                </AppText>
            </View>
            <View style={styles.whiteCircle}></View>
            <View style={styles.blueCircle}></View>
            <View style={styles.patternCircle}></View>
            <Image source={require('../../../assets/Images/pictures/doctor-1.png')} style={styles.doctorPicture} />
        </View>
    )
}

const styles = StyleSheet.create({
    docterCard: {
        padding: 15,
        borderRadius: 12,
        backgroundColor: Colors.secondaryColor,
        position: 'relative',
        overflow: 'hidden',
    },
    doctorText: {
        color: 'white',
    },
    pengalamanContainer: {
        marginTop: 62,
    },
    whiteCircle: {
        width: 127,
        height: 127,
        backgroundColor: 'white',
        borderRadius: '100%',
        position: 'absolute',
        right: -20,
        bottom: -30,
    },
    blueCircle: {
        width: 190,
        height: 190,
        backgroundColor: '#1DACFF',
        borderRadius: '100%',
        position: 'absolute',
        zIndex: -1,
        right: 0,
        top: 10
    },
    patternCircle: {
        width: 170,
        height: 170,
        right: 0,
        top: 40,
        backgroundColor: '#0DA6FF',
        borderRadius: '100%',
        position: 'absolute',
        zIndex: -1,
    },
    doctorPicture: { width: 96, height: 138, position: 'absolute', right: 0, bottom: 0 }
})

export default DoctorCard