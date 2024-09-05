import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

// Define el tipo de los datos que recibirás de la API
interface User {
  id: number;
  name: string;
  email: string;
}

const Axios03 = () => {
  const [users, setUsers] = useState<User[]>([]); // Tipo explícito: un array de objetos User
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data); // Aquí, TypeScript ahora sabe que response.data es de tipo User[]
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>Name: {item.name}</Text> {/* Sin error porque TypeScript sabe que item tiene una propiedad 'name' */}
              <Text>Email: {item.email}</Text> {/* Lo mismo con 'email' */}
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Axios03;
