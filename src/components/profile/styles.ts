import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row'
    },
    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading
    },
    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    }
});