import React from 'react';
import { Image, StatusBar, View } from 'react-native';

import splashImg from '../../../assets/splash.png';

import { styles } from './styles';

export function Splash() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      
      <Image 
        source={splashImg} 
        style={styles.image} 
        resizeMode='stretch'
      />
    </View>
  );
}
