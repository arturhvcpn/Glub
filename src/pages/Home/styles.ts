import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2d2d2d;
`;

export const DrinkWatterStyledButton = styled.TouchableOpacity`
  width: 58%;
  position: absolute;
  bottom: 0;
  padding: 16px 0 ${24 + getBottomSpace()}px;
`;
