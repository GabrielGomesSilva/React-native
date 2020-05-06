import React,{ useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Button, Overlay } from 'react-native-elements';


import { Container, Nav, Perfil, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles';

import pessoa from '~/assets/eureact.jpg';




export default function Menu({navigation}){
    return (
        <Container>
        {/* <Avatar source={pessoa} showEditButton size={100} rounded/>*/}
         
           <Nav>
              <NavItem>
                  <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>  Me ajuda </NavText>              
              </NavItem>
              
              <NavItem>
                  <Icon name="person-outline" size={20} color="#FFF" />
                  <NavText>  Perfil </NavText>              
              </NavItem>

               <NavItem>
                  <Icon name="credit-card" size={20} color="#FFF" />
                  <NavText>  Configurar cartão </NavText>              
                </NavItem>

               <NavItem>
                  <Icon name="smartphone" size={20} color="#FFF" />
                  <NavText>  Configuração do app </NavText>              
                </NavItem>      
           </Nav>

          <SignOutButton onPress={() =>{} }>
            <SignOutButtonText> Sair do app </SignOutButtonText>
          </SignOutButton>        
        </Container>

    
        );

}