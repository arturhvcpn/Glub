import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Container, TitleCicleProgres, TextCicleProgres } from './styles';

const CircleProgress: React.FC = ({ children }) => {
  return (
    <Container>
      <AnimatedCircularProgress
        rotation={0}
        size={300}
        width={12}
        fill={35}
        tintColor="#359df7"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d3d3d"
      >
        {fill => (
          <>
            <TitleCicleProgres>DRINK NOW</TitleCicleProgres>
            <TextCicleProgres>
              {' '}
              {/* {fill} */}
              900 ml
            </TextCicleProgres>
          </>
        )}
      </AnimatedCircularProgress>
    </Container>
  );
};

export default CircleProgress;
