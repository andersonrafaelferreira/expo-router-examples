import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text style={{ marginBottom: 20 }}>home page</Text>
      {/* Simplest way to navigate to another page */}
      <Link href="profile">Navegar para Perfil</Link>
      <Link href="./settings">Navegar para Configurações</Link>
    </View>
  );
}
