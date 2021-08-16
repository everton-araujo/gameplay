import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 27,
  },
  title: {
    fontFamily: theme.fonts.titleBold,
    color: theme.colors.highlight,
    fontSize: 18,
  },
  subtitle: {
    fontFamily: theme.fonts.text,
    color: theme.colors.highlight,
    fontSize: 13,
  }
});
