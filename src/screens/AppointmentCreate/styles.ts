import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.titleBold,
    color: theme.colors.heading,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 68,
    paddingRight: 25,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secondary50,
    overflow: 'hidden'
  },
  selectBody: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 66,
    backgroundColor: theme.colors.secondary40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secondary50,
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.textMedium,
    color: theme.colors.highlight
  },
  textMaxLenghtMessage: {
    fontFamily: theme.fonts.text,
    fontSize: 13,
    color: theme.colors.highlight,
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56,
  }
});
