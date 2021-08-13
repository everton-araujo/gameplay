import React from 'react';
import { ScrollView } from 'react-native';

import { categories } from '../../utils/categories';
import { Category } from '../Category';

import { styles } from './styles';

type CategorySelectedProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

export function CategorySelect({ 
  categorySelected, 
  setCategory 
}: CategorySelectedProps) {
  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
      style={styles.container}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
          />
        ))
      }
    </ScrollView>
  );
}