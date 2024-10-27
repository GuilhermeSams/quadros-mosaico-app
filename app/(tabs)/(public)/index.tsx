import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { items } from "./_data/itensCorousel";
import CarouselItem from "../../../components/Carousel/CarouselItem";
import { useRef, useEffect } from "react";
import PaginationCarousel from "@/components/Carousel/PaginationCarousel";
import CardMosaic from "@/components/CardMosaic_1/CardMosaic";
import Frame_1 from "@/components/CardMosaic_1/FrameMosaics/Frame-1";
import Frame_2 from "@/components/CardMosaic_1/FrameMosaics/Frame-2";
import { DataCardMosaic } from "../../../components/CardMosaic_1/DataCardMosaic";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef<FlatList>(null);
  const intervalTime = 3000;

  const onScrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  useEffect(() => {
    const autoScroll = () => {
      const currentIndex = Math.round(scrollX.value / width);
      const nextIndex = (currentIndex + 1) % items.length;

      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({
          offset: nextIndex * width,
          animated: true,
        });
      }
    };

    const intervalId = setInterval(autoScroll, intervalTime);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ScrollView>
        <View className="my-2 mx-4">
          <Text className="text-black text-2xl leading-6 font-[Koho] w-72">
            Personalize seu quadro com imagens
          </Text>
        </View>
        <View className="bg-[#f2f2f2]">
          <Animated.FlatList
            ref={flatListRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onScrollHandler}
            data={items}
            keyExtractor={(item) => item.id}
            pagingEnabled={true}
            renderItem={({ item, index }) => {
              return (
                <CarouselItem item={item} index={index} scrollX={scrollX} />
              );
            }}
          />
          <View style={styles.paginationContainer}>
            {items.map((_, index) => (
              <PaginationCarousel key={index} index={index} scrollX={scrollX} />
            ))}
          </View>
        </View>
        <View className=" flex-row mt-4 justify-center flex-wrap">
          {DataCardMosaic.map((card, index) => {
            const Component = card.component;
            return (
              <CardMosaic
                key={index}
                ratingStars={card.ratingStars}
                description={card.description}
                price={card.price}
                cents={card.cents}
              >
                {Component ? <Component /> : null}
              </CardMosaic>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
