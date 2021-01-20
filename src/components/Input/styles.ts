import styled from 'styled-components/native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: rgb(45, 45, 45);
  border-radius: 10px;
  margin-bottom: 12px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(IoniconsIcon)`
  color: #fff;
  margin-right: 12px;
`;
