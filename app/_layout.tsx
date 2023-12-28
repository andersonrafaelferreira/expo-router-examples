import { Fontisto } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        drawerInactiveTintColor: '#ea1d2c', 
      }}
    >
      <Drawer.Screen
        name="(drawer)/index" // Deve ter o mesmo nome do arquivo no diretório
        options={{
          drawerLabel: 'Home', // Título no menu lateral
          title: 'Página inicial', // Título no Header da página
          drawerIcon: ({color, size}) => <Fontisto name='home' size={size} color={color}/>, // Ícone do item do menu lateral
        }}
      />
      <Drawer.Screen
        name="(drawer)/profile"
        options={{
          title: 'Perfil do Utilizador',
          drawerLabel: 'Perfil',
          drawerIcon: ({color, size}) => <Fontisto name='user-secret' size={size} color={color}/>,

        }}
      />
    </Drawer>
  );
}