import React from 'react';
import { Animated, FlatList, Image, ScrollView, StyleSheet, View } from 'react-native';

import { Colors } from '../../contants';
import DoctorCard from './Partials/DoctorCard';
import HomeHeader from './Partials/HomeHeader';
import AppText from '../../components/Text/Text';
import CardKonsultasi from './Partials/CardKonsultasi';
import CardArtikel from './Partials/CardArtikel';

function Home() {
  const scrollX = new Animated.Value(0);

  const dataDokter = [
    { id: '1', nama: 'Natael Christie', role: 'Dokter Umum', pengalaman: '2' },
    { id: '2', nama: 'John Bjorn', role: 'Dokter Umum', pengalaman: '2' },
    { id: '3', nama: 'Alexa Tayel', role: 'Dokter Umum', pengalaman: '2' },
  ];
  const dataArtikel = [
    { id: '1', title: 'Manajemen Waktu: Kunci Sehat Mental dan Fisik bagi Pelajar', category: 'Psikologi' },
    { id: '2', title: 'Cara Deteksi Dini Kanker untuk Penanganan yang Lebih Baik', category: 'Medis' },
    { id: '3', title: 'Meningkatkan Kesadaran Kesehatan Melalui Edukasi Medis di Era Digital', category: 'Edukasi' },
  ];

  const renderItemDokter = ({ item }) => (
    <View id={item.id}>
      <DoctorCard nama={item.nama} role={item.role} pengalaman={item.pengalaman} />
    </View>
  );
  const renderItemArticle = ({ item, index }) => (
    <View id={item.id}
      style={[
        { marginRight: index === item.length - 1 ? 0 : 5 },
        { marginLeft: index === 0 ? 15 : 0 }
      ]}>
      <CardArtikel title={item.title} category={item.category} />
    </View>
  );

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
          <View style={styles.rekomendasiHeader}>
            <AppText fontFamily='Raleway-SemiBold' size={24}>
              Rekomendasi Dokter
            </AppText>
            <Image style={{ width: 25, height: 25 }} source={require('../../assets/Images/Icons/arrow.png')} />
          </View>
          <View>
            <FlatList
              data={dataDokter}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={renderItemDokter}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
            />
          </View>
        </View>
        <View>
          <View style={styles.rekomendasiHeader}>
            <AppText fontFamily='Raleway-SemiBold' size={24} >
              Artikel
            </AppText>
            <Image style={{ width: 25, height: 25 }} source={require('../../assets/Images/Icons/arrow.png')} />
          </View>
          <View>
            <FlatList
              data={dataArtikel}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={renderItemArticle}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    gap: 35,
    paddingVertical: 25
  },

  konsultasiContainer: {
    gap: 15,
    paddingHorizontal: 25,
  },

  rekomendasiHeader: {
    paddingHorizontal: 25,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

});

export default Home;
