import React from "react";
import { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Feather';
import { 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  Text, 
  View 
} from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { Header } from "../../components/Header";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";

import { theme } from "../../global/styles/theme";

import { styles } from './styles';
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentCreate() {
  const [category, setCategory] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={styles.container}
    >
      <ScrollView>
        <Header 
          title='Agendar partida'
        />

        <Text style={[
          styles.label, 
          { marginTop: 36, marginBottom: 18, marginLeft: 24 }
        ]}>
          Categoria
        </Text>

        <CategorySelect 
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />

        <View style={styles.form}>
          <RectButton>
            <View style={styles.select}>
              {
                // <View style={styles.image} />
                <GuildIcon />
              }

              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  Selecione um servidor
                </Text>
              </View>

              <Icon
                name='chevron-right'
                size={18}
                color={theme.colors.heading}
              />
            </View>
          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={styles.label}>
                Data
              </Text>

              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>
                  /
                </Text>
                <SmallInput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>
                Horário
              </Text>

              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>
                  :
                </Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
          </View>

          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>
              Descrição
            </Text>

            <Text style={styles.textMaxLenghtMessage}>
              Max 100 caracteres
            </Text>
          </View>

          <TextArea
            multiline
            maxLength={100}
            autoCorrect={false}
          />

          <View style={styles.footer}>
            <ButtonIcon title='Agendar' />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
