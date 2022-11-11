import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../view/pages/HomePage';
import Login from '../view/pages/LoginPage';
import Register from '../view/pages/SignInPage';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;