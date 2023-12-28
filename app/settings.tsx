import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Settings() {
  return (
    <View>
      <Text style={{ marginBottom: 20 }}>settings page</Text>
      {/* Simplest way to navigate to another page */}
      <Link href="/">Navegar para Home</Link>
    </View>
  );
}
