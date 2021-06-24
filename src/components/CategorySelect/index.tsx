import React from 'react';

import { ScrollView, Text } from 'react-native';
import { Style } from './styles';

import { categories } from '../../utils/categories';
import { Category } from '../Category';

type Props = {
    categorySelected: string;
}

export function CategorySelect({categorySelected}: Props){
    return(
        <ScrollView style={Style.container} 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category 
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                    />
                ))
            }
        </ScrollView>
    );
}