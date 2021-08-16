import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Feather';

import { theme } from "../../global/styles/theme";

import { styles } from './styles';
 
type HeaderProps = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: HeaderProps) {
  const { secondary100, secondary40, heading } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient 
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Icon 
          name='arrow-left'
          size={24}
          color={heading}
        />
      </BorderlessButton>

      <Text style={styles.title}>
        { title }
      </Text>

      {
        action 
          ? <View>{ action }</View>
          : <View style={{ width: 24 }} />
      }
    </LinearGradient>
  );
}
