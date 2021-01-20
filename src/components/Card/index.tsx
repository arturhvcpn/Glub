import React from 'react';

import { Container, Title, Subtitle } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <Title>Good morning☀️</Title>
      <Subtitle>Its hot out there. You better drink some Water!💧</Subtitle>
    </Container>
  );
};

export default Card;
