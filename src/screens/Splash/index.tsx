import React from 'react';
import { Image, View } from 'react-native';

import splashImg from '../../../assets/splash.png';

import { styles } from './styles';

export function Splash() {
  return (
    <View style={styles.container}>
      <Image 
        source={splashImg} 
        style={styles.image} 
        resizeMode='stretch'
      />
    </View>
  );
}
