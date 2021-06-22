import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import { Style } from './styles';
import IlustrationImg from './../../assets/illustration.png';

export default function SignIn(){
  return(
    <View style={Style.container}>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Image source={IlustrationImg} style={Style.image} resizeMode="stretch" />

			<View style={Style.content}>
				<Text style={Style.title}>
					Organize {'\n'} Suas Jogatinas {'\n'} Facilmente
				</Text>

				<Text style={Style.subtitle}>
					Crie Grupos para jogas seus games {'\n'} favoritos com seus amigos
				</Text>
				
				<ButtonIcon title="Entrar com Discord" activeOpacity={0.8} />
			</View>
    </View>
  );
}