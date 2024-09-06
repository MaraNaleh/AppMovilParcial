import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ComponenteParcial01 from '../ComponenteParcial01';
import PropsParcial02 from '../PropsParcial02';
import AxiosParcial03 from '../AxiosParcial03';
import AsyncStorageParcial04 from '../AsyncStorageParcial04';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ComponenteParcial01">
        <Stack.Screen name="ComponenteParcial01" component={ComponenteParcial01} />
        <Stack.Screen name="Props02" component={PropsParcial02} />
        <Stack.Screen name="Axios03" component={AxiosParcial03} />
        <Stack.Screen name="AsyncStorage04" component={AsyncStorageParcial04} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
