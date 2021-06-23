import React from 'react';
import { View } from 'react-native';
import { Profile } from '../../components/profile';

import { Style } from './styles';

export function Home(){
    return(
        <View style={Style.container}>

            <View style={Style.header}>
                <Profile />
            </View>

        </View>
    );
}