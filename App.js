import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './PagesApp/LoginPage';
// Ainda não tens Home, então só importei o LoginPage

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{ headerShown: false }} 
        />
        {/* Quando criares a Home, adiciona aqui: 
          <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }} /> 
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
