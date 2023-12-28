import { Fontisto } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: '#ea1d2c', 
      }}
    >
      <Tabs.Screen
        name="(drawer)/index" // Deve ter o mesmo nome do arquivo no diretório
        options={{
          title: 'Home', // Título no Header da página
          tabBarIcon: ({color, size}) => <Fontisto name='home' size={size} color={color}/>, // Ícone do item do menu lateral
        }}
      />
      <Tabs.Screen
        name="(drawer)/profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color, size}) => <Fontisto name='user-secret' size={size} color={color}/>,

        }}
      />
    </Tabs>
  );
}