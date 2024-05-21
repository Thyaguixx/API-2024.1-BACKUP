import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';


export default function NavbarSettings() {

  return (

    <View style={styles.navbarContainer}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.2)']}
        style={styles.shadow}
      />
    
      <View style={styles.navbarSquare}>
        <Image style={styles.navbarIconHome} source={require('../img/home-black.png')} />
      </View>

      <View style={styles.navbarSquare2}>
        <Image style={styles.navbarIconDash} source={require('../img/pie-chart.png')} />
      </View>

      <View style={styles.navbarSquare3}>
        <Image style={styles.navbarIconUser} source={require('../img/user.png')} />
      </View>

      <View style={styles.navbarSquare4}>
        <Image style={styles.navbarIconSetting} source={require('../img/setting-w.png')} />
      </View>

      <View style={styles.navbarBar}></View>


    </View>
    


  );
}


