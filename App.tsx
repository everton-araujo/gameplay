import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { Background } from './src/components/Background';
import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';
import { Splash } from './src/screens/Splash';

export default function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    // TODO - load condition
    setTimeout(() => setLoad(false), 3000);
  }, []);
  
  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      
      {
        load 
          ? <Splash />
          : <AuthProvider>
              <Routes />
            </AuthProvider>
      }
    </Background>
  );
}
