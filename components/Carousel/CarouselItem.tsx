import { Dimensions, Image, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  SharedValue,
} from "react-native-reanimated";

type Props = {
  item: {
    id: string;
    img: any;
  };
  index: number;
  scrollX: SharedValue<number>;
};
const { width } = Dimensions.get("window");

const CarouselItem = ({ item, index, scrollX }: Props) => {
  const rnStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.15, 0, width * 0.15],
            "clamp"
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            "clamp"
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          width,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
        },
        rnStyle,
      ]}
      key={item.id}
    >
      <Image
        source={item.img}
        style={{
          width: "85%",
          height: "100%",
        }}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

export default CarouselItem;
