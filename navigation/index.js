import React from 'react';
import Home from '../screen/home';
import Quiz from '../screen/quiz';
import Result from '../screen/result';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
      <Stack.Screen name="Result" component={Result}  options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}


export default MyStack;

