import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { Text, Image, View } from 'react-native';

import DiscordImg from '../../assets/discord.png';

import { Style } from "./style";

type Props = RectButtonProps & {
    title: String
}

export function ButtonIcon({ title, ...rest } : Props ){
    return(
        <RectButton style={Style.container} { ...rest }>
            <View style={Style.iconWrapper}>
                <Image source={DiscordImg} style={Style.icon} />
            </View>
            <Text style={Style.title}>
                {title}
            </Text>
        </RectButton>
    );
}