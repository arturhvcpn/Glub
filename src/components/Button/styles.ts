import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background-color: rgb(0, 207, 255);
  border-radius: 30px;
  margin-top: 16px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Bold';
  color: #fff;
  font-size: 20px;
`;

export const Icon = styled(IoniconsIcon)`
  margin-right: 4px;
  color: #fff;
`;
