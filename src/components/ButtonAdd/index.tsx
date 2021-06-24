import React from "react";
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Style } from "./styles";
import { theme } from "../../global/styles/theme";

export function ButtonAdd({...rest}: RectButtonProps){
    return(
        <RectButton
            style={Style.container}
            {...rest}
        >
            <MaterialCommunityIcons 
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    );
}