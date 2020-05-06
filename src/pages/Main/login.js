import React from 'react';
import { View, Button, Text } from 'react-native';
import { Container } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '~/Components/Header';

export default function page2({navigation}){

  
  return(

 <Container>
  <View>
       
  <Header/>

  <Input
  placeholder='Login'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='white'
    />
  }
/>

<Input  placeholder="Senha" secureTextEntry={true} leftIcon={
    <Icon
      name='lock'
      size={24}
      color='white'
    />
  } />


<Button 
    type="outline"
    title="Acessar"
    onPress={() => navigation.navigate('Main') }
      />

  </View>


  </Container>
)

};




