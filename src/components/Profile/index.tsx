import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage='data:image/jpeg;base64,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' />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá
          </Text>

          <Text style={styles.userName}>
            Zezinho
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  );
}
