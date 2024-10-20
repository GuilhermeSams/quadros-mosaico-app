import { Text, View } from "react-native";
import { ScrollView } from "tamagui";

export default function HomeScreen() {
  return (
    <>
      <ScrollView className="m-4">
        <View>
          <Text className="text-black text-2xl font-[Koho] w-72">
            Personalize seu quadro com imagens
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
