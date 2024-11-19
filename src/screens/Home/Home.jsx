import React from 'react';
import HomeHeader from './Partials/HomeHeader';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import AppText from '../../components/Text/Text';
import {Colors} from '../../contants';
import CardKonsultasi from './Partials/CardKonsultasi';

function Home() {
  return (
    <ScrollView>
      <View style={styles.homeContainer}>
        <HomeHeader />
        <View style={styles.konsultasiContainer}>
          <AppText fontFamily="Raleway-SemiBold" size={24}>
            Konsultasi
          </AppText>
          <CardKonsultasi
            title="Konsultasi Online"
            description="Jadwalkan Konsultasi secara online dengan dokter dokter pilihan."
            illustration={require('../../assets/Images/Illustrations/card-1.png')}
          />
          <CardKonsultasi
            title="Janji Temu"
            color={Colors.secondaryColor}
            description="Buat janji temu untuk konsultasi langsung di klinik terdekat."
            illustration={require('../../assets/Images/Illustrations/card-2.png')}
          />
        </View>
        <View>
          <AppText fontFamily="Raleway-SemiBold" size={24}>
            Rekomendasi Dokter
          </AppText>
          <View style={styles.docterCard}>
            <View>
              <AppText
                style={styles.doctorText}
                fontFamily="Raleway-SemiBold"
                size={16}>
                Christie Natael
              </AppText>
              <AppText
                style={styles.doctorText}
                size={12}
                fontFamily="Montserrat-Light">
                Doctor Umum
              </AppText>
            </View>
            <View>
              <AppText style={styles.doctorText} fontFamily="Montserrat-Medium">
                Christie Natael
              </AppText>
              <AppText
                style={styles.doctorText}
                fontFamily="Montserrat-Regular">
                Doctor Umum
              </AppText>
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    padding: 25,
    gap: 35,
  },

  konsultasiContainer: {
    gap: 15,
  },
  docterCard: {
    backgroundColor: Colors.secondaryColor,
    padding: 15,
    borderRadius: 12,
  },
  doctorText: {
    color: 'white',
  },
});

export default Home;
