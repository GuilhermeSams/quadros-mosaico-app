import { Text } from "react-native";
import { StatusBar } from "react-native";
import { XStack, Image } from "tamagui";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Header() {
  return (
    <XStack
      bg={"#a08145"}
      ai={"center"}
      jc={"space-between"}
      marginTop={StatusBar.currentHeight}
    >
      <Image
        source={require("../assets/images/logo.png")}
        width={90}
        height={50}
        marginLeft={15}
        marginVertical={10}
      />

      <FontAwesome
        style={{ paddingRight: 15 }}
        className="mr-5"
        name="bell-o"
        size={24}
        color="white"
      />
    </XStack>
  );
}
