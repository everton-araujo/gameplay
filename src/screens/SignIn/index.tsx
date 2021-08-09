import React from 'react';
import { Image, Text, View } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import DiscordImg from '../../assets/discord.png';
import IllustrationImg from '../../assets/illustration.png';

import { styles } from './styles';

export function SignIn() {

  return (
    <View style={styles.container}>
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'} 
          e organize suas {'\n'} 
          jogatinas
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
