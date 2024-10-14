import { View, Text } from "react-native";
import Button from "@/components/Button";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { useAuth, useOAuth, useUser } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const googleOAuth = useOAuth({ strategy: "oauth_google" });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const { signOut } = useAuth();
  const { user, isLoaded } = useUser();

  async function onGoogleSignIn() {
    try {
      setIsLoading(true);
      const redirectUrl = Linking.createURL("/");
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });

      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
      }
      setIsLoading(false); // Certifique-se de limpar o estado
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Em caso de erro, parar o carregamento
    }
  }

  async function handleSignOut() {
    try {
      setIsLoggingOut(true);
      await signOut();
    } catch (error) {
      console.log("Erro ao fazer logout", error);
    } finally {
      setIsLoggingOut(false); // Certifique-se de parar o carregamento após o logout
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      {user ? (
        // Caso o usuário esteja autenticado, exibe o nome e o botão de sair
        <View className="justify-center flex-1 items-center">
          <Text>{user?.fullName}</Text>
          <Button
            title="Sair"
            onPress={handleSignOut}
            isLoading={isLoggingOut} // Usar o estado de isLoggingOut aqui
          />
        </View>
      ) : (
        // Caso o usuário não esteja autenticado, exibe o botão de login
        <View className="w-full flex-1 flex-col items-center justify-center">
          <Text className="text-xl">Faça Login</Text>
          <Button
            title="Entrar com Google"
            onPress={onGoogleSignIn}
            isLoading={isLoading} // Exibe o loading somente ao autenticar
          />
        </View>
      )}
    </View>
  );
}
