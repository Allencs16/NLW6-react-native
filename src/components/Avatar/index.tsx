import React from 'react';
import { Image } from 'react-native';
import { Style } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    return(
        <LinearGradient
            style={Style.container}
            colors={[theme.colors.secondary50, theme.colors.secondary70]}
        >
            <Image 
                source={{ uri: urlImage }}
                style={Style.avatar}
            />
        </LinearGradient>
    );
}