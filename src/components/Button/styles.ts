import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 80%;
  height: 60px;
  background-color: rgb(0, 207, 255);
  border-radius: 30px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Bold';
  color: #fff;
  font-size: 18px;
`;
