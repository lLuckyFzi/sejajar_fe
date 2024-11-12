import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStack from './src/Main';

function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
