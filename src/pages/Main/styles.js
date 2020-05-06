import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background: rgb(0, 74, 173);
  justifyContent: center;
`;
export const Content = styled.View`
flex: 1;
maxHeight: 400px;
zIndex: 5;


`;

export const Card = styled.View`
  flex: 1;
  background: #FFF;
  borderRadius: 4px;
  margin: 0 20px;
  maxheight 100%;
  position:absolute;
  left: 0;
  right: 0;
  top: 0;



`;

export const CardHeader = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  padding: 20px;


`;

export const CardContent = styled.View`
  flex:1;
  padding:0 30px;
  justifyContent: center;
`;

export const Title = styled.Text`
  fontSize:13px;
  color:#999;

`;

export const Description = styled.Text`
  fontSize:32px;
  marginTop:3px;
  color:#111;

`;

export const CardFooter = styled.View`
  padding 30px;
  background: #eee;
  borderRadius: 4px;
`;

export const Annotation = styled.Text`
  fontSize: 12px;
  color:#333;

`;

//Pagina de cobrança

export const Container1 = styled.View`
marginTop:0px;
justifyContent: center;
textAlign:center;
`;

export const Text1 = styled.Text`
marginTop:20px;
marginBottom:10px;
textAlign:center;



`;

export const Container2 = styled.View`
marginTop:20px;
fontSize:20px;
height:50px;



`;

//pagina perfil

export const Topo = styled.View`



`;

export const Container3 = styled.View`
flex: 1;
  background: #3490f7;
  justifyContent: center;


`;

export const Content1 = styled.View`
flex: 2;
maxHeight: 400px;
zIndex: 5;


`;