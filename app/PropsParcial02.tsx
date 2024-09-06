import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

// Define el tipo de parámetros para la navegación
type RootStackParamList = {
  PropsParcial02: { name: string; semester: string }; 
  AxiosParcial03: undefined;
  AsyncStorageParcial04: undefined;
};

// Define el tipo para la ruta de PropsParcial02
type PropsParcial02RouteProp = RouteProp<RootStackParamList, 'PropsParcial02'>;

const PropsParcial02 = () => {
  const route = useRoute<PropsParcial02RouteProp>(); // Usa el hook para obtener la ruta
  const { name, semester } = route.params || { name: '', semester: '' }; // Usa un valor predeterminado si params es undefined

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, textAlign: 'center' }}>
        Mi nombre es: {name}, actualmente estoy en el {semester} semestre.
      </Text>
    </View>
  );
};

export default PropsParcial02;

