import React from 'react';

import { View, Text } from 'react-native';
import { Style } from './styles';
import { SvgProps } from 'react-native-svg';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

type Props = RectButtonProps &{
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean; 
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: Props){
    return(
        <RectButton {...rest}>
            <LinearGradient 
                style={Style.container}
                colors={[theme.colors.secondary50, theme.colors.secondary70]}
            >
                <View style={[Style.content, { opacity: checked ? 1 : 0.4 }]}>
                    <View style={checked ? Style.checked : Style.check} />
                    
                    <Icon 
                        width={48}
                        height={48}
                    />

                    <Text style={Style.title}>{title}</Text>
                </View>
            </LinearGradient>
        </RectButton>
    );
}