import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  PropsParcial02: { name: string; semester: string }; 
  AxiosParcial03: undefined;
  AsyncStorageParcial04: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ComponenteParcial01 = () => {
  const [name, setName] = useState('');
  const [semester, setSemester] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleNavigateToProps = () => {
    navigation.navigate('PropsParcial02', { name, semester });
  };

  const handleNavigateToAxios = () => {
    navigation.navigate('AxiosParcial03');
  };

  const handleNavigateToAsyncStorage = () => {
    navigation.navigate('AsyncStorageParcial04');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>
      <TextInput
        placeholder="Ingresar nombre completo"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Ingresar semestre"
        value={semester}
        onChangeText={setSemester}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleNavigateToProps}>
        <Text style={styles.buttonText}>Ir a PropsParcial02</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToAxios}>
        <Text style={styles.buttonText}>Ir a AxiosParcial03</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToAsyncStorage}>
        <Text style={styles.buttonText}>Ir a AsyncStorageParcial04</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ComponenteParcial01;
