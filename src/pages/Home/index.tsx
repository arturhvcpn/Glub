import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { Container, DrinkWatterStyledButton } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Card
        title="Good morning☀️"
        paragraph="Its hot out there. You better drink some Water!💧"
      />
      <DrinkWatterStyledButton>
        <Button icon="water">Beber Água</Button>
      </DrinkWatterStyledButton>
    </Container>
  );
};

export default Home;
