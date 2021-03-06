import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #191919;
  padding: 0 30px ${Platform.OS === 'android' ? 140 : 20}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #ffffff;
  font-family: 'Roboto-Medium';
  margin: 64px 0 24px;
`;

export const BackToSignInButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgb(31, 31, 31);
  border-top-width: 1px;
  border-color: rgb(28, 28, 28);
  padding: 16px 0 ${10 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-family: 'Roboto-Regular';
  font-size: 18px;
  margin-left: 8px;
`;
