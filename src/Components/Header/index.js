import React from 'react';
import { Container, Top, Logo, Title } from './styles';



import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/GMB4.png';
export default function Header(){
    return(
        <Container>
            <Top>
                <Logo source={logo}/>
                <Title></Title>

            </Top>
            
        </Container>
        

    );
}