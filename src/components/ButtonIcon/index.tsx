import React from 'react';
import { 
  Image, 
  ImageSourcePropType, 
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps, 
  View 
} from 'react-native';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  image: ImageSourcePropType;
}

export function ButtonIcon({ title, image, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={image} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}