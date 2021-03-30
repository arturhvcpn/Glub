import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import { MilliliterProvider } from './contexts/MilliliterContext';

interface AppProps {
  milliliter: number;
}

const App: React.FC<AppProps> = (props: AppProps) => (
  <>
    <MilliliterProvider milliliter={props.milliliter}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#00CFFF" />
        <View style={{ flex: 1, backgroundColor: '#2d2d2d' }}>
          <Routes />
        </View>
      </NavigationContainer>
    </MilliliterProvider>
  </>
);

export default App;
