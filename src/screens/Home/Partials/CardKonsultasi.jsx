import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AppText from '../../../components/Text/Text';
import {Colors} from '../../../contants';

function CardKonsultasi(props) {
  const {title, description, illustration, color = Colors.primaryColor} = props;

  return (
    <View style={{...styles.konsultasiCard, backgroundColor: color}}>
      <AppText
        fontFamily="Raleway-SemiBold"
        size={16}
        style={styles.konsultasiCardText}>
        {title || 'Title'}
      </AppText>
      <AppText
        fontFamily="Montserrat-Regular"
        size={12}
        style={styles.konsultasiCardText}>
        {description || 'Description'}
      </AppText>
      <Image
        style={styles.cardImg}
        source={
          illustration ||
          require('../../../assets/Images/Illustrations/card-1.png')
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  konsultasiCard: {
    paddingTop: 15,
    borderRadius: 12,
    paddingBottom: 22,
    paddingHorizontal: 18,
    gap: 37,
    position: 'relative',
    overflow: 'hidden',
  },
  cardImg: {
    position: 'absolute',
    top: -60,
    right: -100,
    bottom: 0,
    width: '100%',
    height: 300,
    zIndex: -1,
  },
  konsultasiCardText: {
    color: 'white',
    width: '80%',
  },
});

export default CardKonsultasi;
