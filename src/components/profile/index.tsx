import React from 'react';

import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { Style } from './styles';

export function Profile(){
    return(
      <View style={Style.container}>

				<Avatar 
					urlImage="https://github.com/Allencs16.png"
				/>
          
        <View>
					<View style={Style.user}>
						<Text style={Style.greeting}>
							Olá, 
						</Text>

						<Text style={Style.username}>
							Breno
						</Text>
					</View>

					<Text style={Style.message}>Hoje é dia de vitória</Text>
        </View>

      </View>
    );
}