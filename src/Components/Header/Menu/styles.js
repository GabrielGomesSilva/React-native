import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin:40px 30px;
`;

export const Nav = styled.View`
marginTop: 20px;
borderTopWidth: ${StyleSheet.hairlineWidth}px;
borderTopColor: rgba(255, 255, 255, 0.8);



`;

export const NavItem = styled.View`
flexDirection: row;
alignItems: center;
padding: 10px 0;
borderTopWidth: ${StyleSheet.hairlineWidth}px;
borderTopColor: rgba(255, 255, 255, 0.8);



`;

export const NavText = styled.Text`
fontSize: 15px;
color:#FFF;
marginLeft: 20px;


`;

export const SignOutButton = styled.TouchableOpacity`
borderWidth: ${StyleSheet.hairlineWidth}px;
borderColor: rgba(255, 255, 255, 0.8);
borderRadius: 4px;
justifyContent: center;
alignItems: center;
padding:  12px;
marginTop:  15px;

`;

export const SignOutButtonText = styled.Text`
color:#FFF;
fontWeight: bold;
fontSize: 13px;


`;

export const Avatar = styled.Image`


`;

export const pessoa = styled.View`
alignItems: center;
`;