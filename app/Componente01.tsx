import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define el tipo de parámetros para la navegación
type RootStackParamList = {
  Props02: { names: string[] }; 
  Axios03: undefined; 
  AsyncStorage04: undefined;
};

// Define el tipo de navegación
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Componente01 = () => {
  const [inputText, setInputText] = useState('');
  const [entries, setEntries] = useState<string[]>([]);
  const navigation = useNavigation<NavigationProp>();

  const handleAddEntry = () => {
    if (inputText) {
      setEntries([...entries, inputText]);
      setInputText('');
    }
  };

  const handleNavigate = (screen: keyof RootStackParamList) => {
    if (screen === 'Props02') {
      navigation.navigate(screen, { names: entries });
    } else {
      navigation.navigate(screen);
    }
  };

  const handleAxios = async () => {
    try {
      const response = await axios.get('https://api.example.com/data'); // Cambia esta URL por la de tu API
      Alert.alert('Data fetched', JSON.stringify(response.data));
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch data');
    }
  };

  const handleAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('myKey', JSON.stringify(entries));
      Alert.alert('Data saved', 'Entries saved to AsyncStorage');
    } catch (error) {
      Alert.alert('Error', 'Failed to save data');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Pantalla Principal</Text>
      <TextInput
        placeholder="Ingresa un texto"
        value={inputText}
        onChangeText={setInputText}
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <Button title="Agregar Entrada" onPress={handleAddEntry} />
      <FlatList
        data={entries.map((entry, index) => ({ key: entry, index }))}
        renderItem={({ item }) => (
          <Text style={{ padding: 10, backgroundColor: '#ddd', marginVertical: 5 }}>
            {item.key}
          </Text>
        )}
        keyExtractor={(item) => item.index.toString()}
      />
      <Button title="Ir a Props02" onPress={() => handleNavigate('Props02')} />
      <Button title="Ir a Axios03" onPress={() => handleNavigate('Axios03')} />
      <Button title="Ir a AsyncStorage04" onPress={() => handleNavigate('AsyncStorage04')} />

    </View>
  );
};

export default Componente01;
