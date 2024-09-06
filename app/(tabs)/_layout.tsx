import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComponenteParcial01 from '../ComponenteParcial01';
import PropsParcial02 from '../PropsParcial02';
import AxiosParcial03 from '../AxiosParcial03';
import AsyncStorageParcial04 from '../AsyncStorageParcial04';
import { RootStackParamList } from '../../types'; // Ajusta la ruta según sea necesario
import { NavigatorScreenParams } from '@react-navigation/native';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function Layout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ComponenteParcial01" component={ComponenteParcial01} />
      <Tab.Screen name="PropsParcial02" component={PropsParcial02} />
      <Tab.Screen name="AxiosParcial03" component={AxiosParcial03} />
      <Tab.Screen name="AsyncStorageParcial04" component={AsyncStorageParcial04} />
    </Tab.Navigator>
  );
}
