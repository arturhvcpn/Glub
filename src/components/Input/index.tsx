import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputRef {
  focus: void;
}
const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => (
  <Container>
    <Icon name={icon} size={22} />
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#fff"
      {...rest}
    />
  </Container>
);

export default Input;
