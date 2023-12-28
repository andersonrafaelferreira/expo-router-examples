import { Stack } from "expo-router";

// Se Utilizar API file system routing não é necessário criar este arquivo

// export default function Layout() {
//   return <Stack />;
// }

// Agora se for definir mais configurações para as rotas é necessário criar como demonstrado abaixo:

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Página inicial" }} />
      {/* Adicione somente as rotas que deseja alterar as configurações default */}
    </Stack>
  );
}


// Neste caso o Header já habilita por padrão a navegação < Voltar "Página"