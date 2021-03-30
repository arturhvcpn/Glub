import React, { useContext } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Container, TitleCicleProgres, TextCicleProgres } from './styles';
import {
  useCounterMilliliter,
  MilliliterContext,
} from '../../contexts/MilliliterContext';

interface CircleProgressProps {
  children?: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  children,
}: CircleProgressProps) => {
  const { milliliter } = useContext(MilliliterContext);
  // const { milliliter } = useCounterMilliliter();

  return (
    <Container>
      <AnimatedCircularProgress
        rotation={0}
        size={300}
        width={12}
        fill={milliliter}
        tintColor="#3fa8e7"
        backgroundColor="#3d3d3d"
      >
        {fill => (
          <>
            <TitleCicleProgres>DRINK NOW</TitleCicleProgres>
            <TextCicleProgres>
              {milliliter}
              ml
            </TextCicleProgres>
          </>
        )}
      </AnimatedCircularProgress>
    </Container>
  );
};

export default CircleProgress;
