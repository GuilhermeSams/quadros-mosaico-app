import React, { useState, useCallback } from "react";
import { View, Text, Image, ScrollView } from "tamagui";
import { RefreshControl } from "react-native";
import MosaicFrame from "@/components/InputImageMosaic/InputImageMosaic";

export default function ScreenCustomFrame() {
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleImageSelected = () => {
    setIsImageSelected(true);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setIsImageSelected(false); // Reset image selection if needed
    }, 2000);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View>
        <Text>120 Vendidos</Text>
        <Text>5 Mosaicos semétrico tamanho normal</Text>
      </View>
      <Image
        source={
          isImageSelected
            ? require('../../../../assets/images/sala.png')
            : require('../../../../assets/images/sala_mosaico_01.png')
        }
      />
      <MosaicFrame onImageSelected={handleImageSelected} refreshing={refreshing} />
    </ScrollView>
  );
}
