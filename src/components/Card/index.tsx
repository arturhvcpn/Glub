import React from 'react';

import { Container, Title, Subtitle } from './styles';

type CardProps = {
  title: string;
  paragraph?: string;
};

const Card: React.FC<CardProps> = ({ title, paragraph }: CardProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{paragraph}</Subtitle>
    </Container>
  );
};

export default Card;
