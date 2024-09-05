import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native'; // Importa desde '@react-navigation/native'

type RootStackParamList = {
  Props02: { names: string[] };
  Axios03: undefined;
  AsyncStorage04: undefined;
};

// Define el tipo para la ruta de Props02
type Props02RouteProp = RouteProp<RootStackParamList, 'Props02'>;

const Props02 = () => {
  const route = useRoute<Props02RouteProp>(); // Usa el hook para obtener la ruta
  const names = route.params?.names || []; // Usa un valor predeterminado si params es undefined

  return (
    <View style={{ padding: 20 }}>
      <Text>Pantalla</Text>
      <FlatList
        data={names.map((name, index) => ({ key: name, index }))}
        renderItem={({ item }) => (
          <Text style={{ padding: 10, backgroundColor: '#ddd', marginVertical: 5 }}>
            {item.key}
          </Text>
        )}
        keyExtractor={(item) => item.index.toString()}
      />
    </View>
  );
};

export default Props02;
