import React from "react";
import { View } from "react-native";

import { styles } from './styles';

type ListDividerProps = {
  isCentralized?: boolean;
}

export function ListDivider({ isCentralized }: ListDividerProps) {
  return (
    <View 
      style={[
        styles.container,
        isCentralized 
          ? { marginVertical: 12 }
          : { marginTop: 2, marginBottom: 32 }
      ]} 
    />
  );
}
