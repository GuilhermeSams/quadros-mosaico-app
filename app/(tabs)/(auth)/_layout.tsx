import { Slot } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { useState } from "react";
import { View, Text } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Progress } from "tamagui";

export default function AuthLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [isProgressing, setIsProgressing] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Reseta o progresso quando a página for montada ou quando o estado mudar
  useFocusEffect(
    useCallback(() => {
      setProgress(0); // Reinicia o progresso para 0 sempre que a página ganhar foco
      setIsProgressing(false); // Reinicia o estado de progresso

      let interval: NodeJS.Timeout;
      let timeout: NodeJS.Timeout;

      if (isLoaded && !isSignedIn) {
        setIsProgressing(true); // Inicia o estado de progresso

        // Incrementa o progresso gradualmente até 100% em 2000ms (2 segundos)
        interval = setInterval(() => {
          setProgress((prev) => {
            const newValue = prev + 100 / (2000 / 100);
            if (newValue >= 100) {
              clearInterval(interval);
              return 100;
            }
            return newValue;
          });
        }, 100);

        // Configura o timeout para redirecionar após 2200ms
        timeout = setTimeout(() => {
          router.replace("/(tabs)/account/login");
        }, 2200);

        setTimeoutId(timeout); // Armazena o ID do timeout
      }

      // Limpa o intervalo e o timeout se o componente for desmontado ou se o estado mudar
      return () => {
        clearInterval(interval);
        clearTimeout(timeout); // Cancela o redirecionamento se o usuário sair da página
        setProgress(0); // Garante que o progresso seja resetado se sair da página
        setIsProgressing(false); // Reseta o estado de progresso
      };
    }, [isSignedIn, isLoaded, router])
  );

  if (!isSignedIn && isProgressing) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text className="text-center text-base">
          É necessário autenticação. Você será redirecionado para o Login
          instantes.
        </Text>
        <Progress value={progress} size="$4" marginTop="$4">
          <Progress.Indicator animation="bouncy" />
        </Progress>
      </View>
    );
  }

  return <Slot />;
}
