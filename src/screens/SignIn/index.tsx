import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import DiscordImg from '../../assets/discord.png';
import IllustrationImg from '../../assets/illustration.png';

import { styles } from './styles';

export function SignIn() {

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'} 
          facilmente {'\n'} 
          suas jogatinas
        </Text>

        <Text style={styles.subTitle}>
          Crie gurpos para jogar seus games {'\n'} 
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title='Entrar com Discord'
          image={DiscordImg}
          activeOpacity={0.6}
        />
      </View>
    </View>
  );
}
