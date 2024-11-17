import { View, Text, XStack } from "tamagui";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

type CardMosaicVariantProps = {
  children: ReactNode; // Tipagem como ReactNode para maior flexibilidade
  ratingStars: number;
  description: string;
  price: number;
  cents: number;
  mosaicType: string;
};

const CardMosaic = ({
  children,
  ratingStars,
  description,
  price,
  cents,
  mosaicType,
}: CardMosaicVariantProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push({ pathname: "/(tabs)/(public)/customizeFrame", params: { mosaicType } })}
      activeOpacity={0.6}
    >
      <View
        bg={"#ffffff"}
        alignSelf="flex-start"
        borderRadius={5}
        borderWidth={0.5}
        margin={7}
        borderColor={"rgba(0, 0, 0, 0.5);"}
      >
        <XStack
          h={200}
          ai={"center"}
          bg={"#d6b372"}
          justifyContent="center"
          gap={3}
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
        >
          {children}
        </XStack>
        <StarRatingDisplay starSize={23} rating={ratingStars} />
        <View h={60} margin={5}>
          <Text fontSize={11} w={150}>
            {description}
          </Text>
          <View>
            <Text fontSize={14} fontWeight={"bold"}>
              R$: {price},{cents}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardMosaic;
