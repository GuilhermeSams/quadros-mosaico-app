import { StyleSheet, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  SharedValue,
} from "react-native-reanimated";

type PaginationDotProps = {
  index: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("window");

const PaginationCarousel = ({ index, scrollX }: PaginationDotProps) => {
  const animatedDotStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0.5, 1, 0.5],
      "clamp"
    );

    const scale = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0.8, 1.2, 0.8],
      "clamp"
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return <Animated.View style={[styles.dot, animatedDotStyle]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#595959",
    marginHorizontal: 8,
  },
});

export default PaginationCarousel;
