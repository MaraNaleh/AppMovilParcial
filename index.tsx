// index.tsx
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './app/(tabs)/_layout'; // Asegúrate de que la ruta sea correcta

const App = () => (
  <NavigationContainer>
    <Layout />
  </NavigationContainer>
);

registerRootComponent(App);
