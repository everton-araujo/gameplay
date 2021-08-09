import React, { useEffect, useState } from 'react';

import { SignIn } from './src/screens/SignIn';
import { Splash } from './src/screens/Splash';

export default function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    // TODO - load condition
    setTimeout(() => setLoad(false), 3000);
  }, []);
  
  return (
    <>
      {
        load 
          ? <Splash />
          : <SignIn />
      }
    </>
  )
}
