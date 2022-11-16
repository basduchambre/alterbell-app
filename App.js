import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenHome from './src/components/ScreenHome';
import ScreenSettings from './src/components/ScreenSettings';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={ScreenHome} />
        <Stack.Screen name="Settings" component={ScreenSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
