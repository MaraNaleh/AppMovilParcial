// app/Props02.tsx
import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
// En cualquier archivo
import { RootStackParamList } from '../types';

type Props02RouteProp = RouteProp<RootStackParamList, 'Props02'>;

const Props02: React.FC = () => {
  const route = useRoute<Props02RouteProp>();
  const { name, estado } = route.params || {}; // Maneja el caso en que `params` es undefined

  return (
    <View style={{ padding: 20 }}>
      <Text>Nombre: {name || 'No hay nombre'}</Text>
      <Text>Estado: {estado !== undefined ? estado.toString() : 'No hay estado'}</Text>
    </View>
  );
};

export default Props02;
