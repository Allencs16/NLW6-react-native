import React from 'react';
import { View } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/profile';

import { Style } from './styles';

export function Home(){
    return(
        <View style={Style.container}>

            <View style={Style.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect 
                    categorySelected="true"
                />
            </View>

        </View>
    );
}