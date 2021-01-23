import React from 'react';
import Card from '../../components/Card';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Card
        title="Good morning☀️"
        paragraph="Its hot out there. You better drink some Water!💧"
      />
    </Container>
  );
};

export default Home;
