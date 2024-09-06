import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const AsyncStorage04 = () => {
  const [codigo, setCodigo] = useState('');
  const [materia, setMateria] = useState('');
  const [calificaciones, setCalificaciones] = useState('');
  const [data, setData] = useState<{ codigo: string; materia: string; calificaciones: string }[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCodigo, setEditingCodigo] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const saveData = async () => {
    try {
      const newData = [...data, { codigo, materia, calificaciones }];
      setData(newData);
      await AsyncStorage.setItem('userData', JSON.stringify(newData));
      setCodigo('');
      setMateria('');
      setCalificaciones('');
    } catch (error) {
      console.log(error);
    }
  };

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userData');
      if (storedData !== null) {
        setData(JSON.parse(storedData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editData = (codigo: string) => {
    const itemToEdit = data.find((item) => item.codigo === codigo);
    if (itemToEdit) {
      setCodigo(itemToEdit.codigo);
      setMateria(itemToEdit.materia);
      setCalificaciones(itemToEdit.calificaciones);
      setIsEditing(true);
      setEditingCodigo(codigo);
    }
  };

  const updateData = async () => {
    try {
      const updatedData = data.map((item) =>
        item.codigo === editingCodigo ? { codigo, materia, calificaciones } : item
      );
      setData(updatedData);
      await AsyncStorage.setItem('userData', JSON.stringify(updatedData));
      setCodigo('');
      setMateria('');
      setCalificaciones('');
      setIsEditing(false);
      setEditingCodigo('');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (codigo: string) => {
    try {
      const newData = data.filter((item) => item.codigo !== codigo);
      setData(newData);
      await AsyncStorage.setItem('userData', JSON.stringify(newData));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveOrUpdate = () => {
    if (isEditing) {
      updateData();
    } else {
      saveData();
    }
  };

  const renderItem = ({ item }: { item: { codigo: string; materia: string; calificaciones: string } }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#f9f9f9', marginVertical: 5 }}>
      <View>
        <Text>Código: {item.codigo}</Text>
        <Text>Materia: {item.materia}</Text>
        <Text>Calificaciones: {item.calificaciones}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {/* Botón para editar */}
        <TouchableOpacity onPress={() => editData(item.codigo)}>
          <Icon name="edit" size={20} color="blue" style={{ marginRight: 15 }} />
        </TouchableOpacity>
        {/* Botón para eliminar */}
        <TouchableOpacity onPress={() => deleteData(item.codigo)}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Calificaciones"
        value={calificaciones}
        onChangeText={setCalificaciones}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title={isEditing ? 'Actualizar' : 'Guardar'} onPress={handleSaveOrUpdate} />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.codigo}
      />
    </View>
  );
};

export default AsyncStorage04;
