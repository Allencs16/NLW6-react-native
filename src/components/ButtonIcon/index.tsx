import React from "react";

import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import DiscordImg from '../../assets/discord.png';

import { Style } from "./style";

type Props = TouchableOpacityProps & {
    title: String
}

export function ButtonIcon({ title, ...rest } : Props ){
    return(
        <TouchableOpacity style={Style.container} { ...rest }>
            <View style={Style.iconWrapper}>
                <Image source={DiscordImg} style={Style.icon} />
            </View>
            <Text style={Style.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}