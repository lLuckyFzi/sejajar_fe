import React from 'react';
import AppText from '../../../components/Text/Text';
import {Image, StyleSheet, View} from 'react-native';

function HomeHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImgContainer}>
          <Image
            style={styles.profileImg}
            source={require('../../../assets/Images/Illustrations/profile.png')}
          />
        </View>
        <AppText size={14} fontFamily="Montserrat-Regular">
          Lucky Fauzi
        </AppText>
      </View>
      <View style={styles.bellIconContainer}>
        <Image
          style={styles.bellIcon}
          source={require('../../../assets/Images/Icons/bell.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  profileImgContainer: {
    width: 37,
    height: 37,
  },
  profileImg: {
    width: 37,
    height: 37,
  },

  bellIconContainer: {
    width: 24,
    height: 24,
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
});

export default HomeHeader;
