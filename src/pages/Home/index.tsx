import React, { useContext } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
// import Modal from '../../components/Modal';
import { Container, DrinkWatterStyledButton } from './styles';
import CircleProgress from '../../components/CircleProgress';
import { MilliliterContext } from '../../contexts/MilliliterContext';

const Home: React.FC = () => {
  const { milliliter, useSetCounterMilliliter } = useContext(MilliliterContext);
  return (
    <Container>
      <Card
        title="Good morning☀️"
        paragraph="Its hot out there. You better drink some Water!💧"
      />
      <CircleProgress />
      <DrinkWatterStyledButton>
        <Button onPress={useSetCounterMilliliter} icon="water">
          Beber Água
        </Button>
      </DrinkWatterStyledButton>
    </Container>
  );
};

export default Home;
