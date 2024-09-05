import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface DataItem {
  name: string;
  idNumber: string;
}

const AsyncStorage04 = () => {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [data, setData] = useState<DataItem[]>([]); // Define the type here

  const saveData = async () => {
    try {
      const newItem = { name, idNumber };
      const newData = [...data, newItem];
      setData(newData);
      await AsyncStorage.setItem('userData', JSON.stringify(newData));
    } catch (e) {
      console.error(e);
    }
  };

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userData');
      if (storedData) {
        setData(JSON.parse(storedData)); // Cast the parsed data
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="ID Number"
        value={idNumber}
        onChangeText={setIdNumber}
      />
      <Button title="Save" onPress={saveData} />
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.idNumber}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.idNumber}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AsyncStorage04;
