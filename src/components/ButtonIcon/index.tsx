import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { 
  Image, 
  ImageSourcePropType, 
  Text, 
  View 
} from 'react-native';

import { styles } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
  image?: ImageSourcePropType;
}

export function ButtonIcon({ title, image, ...rest }: ButtonProps) {
  return (
    <RectButton 
      style={styles.container} 
      {...rest}
    >
      {
        image && (
          <View style={styles.iconWrapper}>
            <Image 
              style={styles.icon}
              source={image}
            />
          </View>
        )
      }

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}