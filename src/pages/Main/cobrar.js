import React from 'react';
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Container1, Text1,Container2 } from './styles';


export default function page3({navigation}){

  const list = [
    {
      name: 'Hulk',
      avatar_url: 'https://img.ibxk.com.br/2019/09/07/07151052191058.jpg?w=1120&h=420&mode=crop&scale=both',
      subtitle: 'R$1200'
    },
    {
      name: 'Homem de Ferro',
      avatar_url: 'https://i0.wp.com/pipocamoderna.com.br/wp-content/uploads/2019/09/iron-man-robert-downey-jr-800x1020.jpg',
      subtitle: 'R$1000'
    },
    {
      name: 'Thor',
      avatar_url: 'https://img.olhardigital.com.br/uploads/acervo_imagens/2014/11/r16x9/20141112161149_1200_675_-_thor.jpg',
      subtitle: 'R$500'
    },
    {
      name: 'Batman',
      avatar_url: 'https://sagresonline.com.br/wp-content/uploads/2020/05/Batman_reprodu%C3%A7%C3%A3o_Sagres730-324x400.jpg',
      subtitle: 'R$200'
    },
    {
      name: 'Viuva Negra',
      avatar_url: 'https://abrilveja.files.wordpress.com/2017/05/black-widow-scarlett-johansson-age-of-ultron-poster.jpg?quality=70&strip=info&w=1024',
      subtitle: 'R$150'
    },
    {
      name: 'Rocket',
      avatar_url: 'https://vignette.wikia.nocookie.net/universocinematograficomarvel/images/3/35/Rocket_Poster.png/revision/latest?cb=20150921020743&path-prefix=pt',
      subtitle: 'R$100'
    },
    
  ]
  
  
  return(

  <View>
        <Container1>
          <Text1> Cobrar </Text1>
          {
          list.map((l, i,) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
              checkBox= {true}   
            />
          ))
          }   
        </Container1>
    

    <Container2>
      <View style={{flex: 3, flexDirection: 'row', justifyContent: 'space-around',}}>
        <View>
            <Button 
            type="outline"
            title="Voltar"
            onPress={() => navigation.navigate('Main') }
            />
        </View>
        <View>
            <Button 
              type="outline"
              title="Enviar"
              onPress={() => navigation.navigate('Main') }
            />
        </View>
      </View>
    </Container2>
  </View>
)

};




