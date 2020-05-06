import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  marginTop: 50px;
  marginBottom:10px;

`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal:true,
    contentContainerStyle: { paddingLeft:10, paddingRight:20 },
    showsHorizontalScrollIndicator:true,
    centerContent:true,

})``;

export const TabItem =styled.View`
width: 100px;
height: 100px;
background: rgba(255, 255, 255, 0.2);
borderRadius: 3px;
marginLeft: 10px; 
padding: 10px;
justifyContent: space-between;

`;
 export const TabText = styled.Text`
    fontSize: 13px;
    color:#FFF;
 
 `;


