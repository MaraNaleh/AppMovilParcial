import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define el tipo de datos que contiene la lista
interface Item {
  key: string;
  screen: string;
}

const Componente01 = () => {
  const [inputText, setInputText] = useState('');

  // Define el tipo de la navegación (ajústalo según tu configuración de navegación)
  const navigation = useNavigation<NavigationProp<any>>();

  // Datos de la lista con tipado explícito
  const data: Item[] = [
    { key: 'Props02', screen: 'Props02' },
    { key: 'Axios03', screen: 'Axios03' },
    { key: 'AsyncStorage04', screen: 'AsyncStorage04' }
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text>Pantalla Principal</Text>
      <TextInput
        placeholder="Ingresa un texto"
        value={inputText}
        onChangeText={setInputText}
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
            <Text style={{ padding: 10, backgroundColor: '#ddd', marginVertical: 5 }}>{item.key}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Componente01;
