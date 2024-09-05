// app/(tabs)/_layout.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Componente01 from '../Componente01';
import Props02 from '../Props02';
import Axios03 from '../Axios03';
import AsyncStorage04 from '../AsyncStorage04';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Componente01" component={Componente01} />
      <Tab.Screen name="Props02" component={Props02} />
      <Tab.Screen name="Axios03" component={Axios03} />
      <Tab.Screen name="AsyncStorage04" component={AsyncStorage04} />
    </Tab.Navigator>
  );
}

