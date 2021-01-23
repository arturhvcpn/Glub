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
        tintColor="#3fa8e7"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d3d3d"
        dashedBackground={{ gap: 80, width: 8 }}
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
