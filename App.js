import React from 'react';
import MyStack from './navigation';
import { NavigationContainer } from '@react-navigation/native';

const App =() =>{

  return(
     <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default App;

