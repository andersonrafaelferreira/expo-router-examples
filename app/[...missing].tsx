import { useNavigation } from "expo-router";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// Página 404 da web ;)
export default function Missing() {
  const navigate = useNavigation();
  return (
    <>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Página não encontrada!</Text>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
