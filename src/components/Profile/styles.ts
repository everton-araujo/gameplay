import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.title,
    fontSize: 24,
    marginRight: 6,
    color: theme.colors.heading,
  },
  userName: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text,
    color: theme.colors.highlight,
  }
});
