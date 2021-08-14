import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    fontSize: 13,
    fontFamily: theme.fonts.text,
    marginRight: 4,
    textAlign: 'center',
  }
});
