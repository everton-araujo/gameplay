import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import {
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps, 
  View 
} from "react-native";

import { GuildIcon } from "../GuildIcon";

import { theme } from "../../global/styles/theme";

import { styles } from './styles';

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon />
      
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            { data.name }
          </Text>

          <Text style={styles.type}>
            { data.owner ? 'Administrador' : 'Convidado' }
          </Text>
        </View>
      </View>

      <Icon
        name='chevron-right'
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  );
}
