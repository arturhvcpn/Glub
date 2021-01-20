import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoImg} />
        <Title>Faça seu logon</Title>

        <Input name="email" icon="mail" placeholder="Email" />

        <Input name="password" icon="lock-closed" placeholder="Password" />

        <Button
          onPress={() => {
            console.log('clickable');
          }}
        >
          Entrar
        </Button>
        <ForgotPassword
          onPress={() => {
            console.log('forgotpassword');
          }}
        >
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>
      <CreateAccountButton
        onPress={() => {
          console.log('createaccountbutton');
        }}
      >
        <Icon name="log-in" size={20} color="rgb(0, 207, 255)" />
        <CreateAccountText>Criar minha conta</CreateAccountText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
