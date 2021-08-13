import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AQ8FmTsQxNOcSeedV4rtW_En0lXNG9cXWA&usqp=CAU'

  return (
    <Image 
      source={{ uri }}
      resizeMode='cover'
      style={styles.image}
    />
  );
}
