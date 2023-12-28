import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View>
      <Text style={{ marginBottom: 20 }}>Profile page</Text>

      {/* Navigate to another page using a Button | para isso aplique a prop asChild */}
      <Link href="./settings" asChild>
        <TouchableOpacity
          style={{
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            padding: 10,
            backgroundColor: "pink",
            borderRadius: 20,
          }}
        >
          <Text>Navegar para Perfil</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
