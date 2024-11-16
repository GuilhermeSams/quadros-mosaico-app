import React, { useState, useEffect } from "react";
import { Alert, Dimensions, FlatList } from "react-native";
import { Button } from "tamagui";
import { View } from "tamagui";
import { Svg, Image as SvgImage } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

interface MosaicFrameProps {
  onImageSelected: () => void;
  refreshing: boolean;
}

const MosaicFrame: React.FC<MosaicFrameProps> = ({ onImageSelected, refreshing }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageParts, setImageParts] = useState<string[]>([]);
  const heights = [420, 460, 500, 460, 420]; // Alturas desejadas

  const screenWidth = Dimensions.get("window").width;
  const svgWidth = screenWidth * 0.6;
  const partWidth = svgWidth / 5;
  const spacing = partWidth * 0.1; // 10% do tamanho da parte

  useEffect(() => {
    if (refreshing) {
      setImageUri(null);
      setImageParts([]);
    }
  }, [refreshing]);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        const originalWidth = result.assets[0].width;
        const originalHeight = result.assets[0].height;

        if (originalWidth !== originalHeight) {
          Alert.alert(
            "Dimensões inválidas",
            "A imagem deve ter largura e altura iguais, por exemplo 1000x1000 pixels."
          );
          return;
        }

        const resizedImage = await ImageManipulator.manipulateAsync(
          uri,
          [{ resize: { width: 800 } }],
          { compress: 0.5, format: ImageManipulator.SaveFormat.PNG }
        );

        setImageUri(resizedImage.uri);
        splitImage(resizedImage.uri, 800, 800);
        onImageSelected(); // Chama a função quando a imagem é válida
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao selecionar a imagem.");
      console.error("Erro ao selecionar a imagem:", error);
    }
  };

  const splitImage = async (uri: string, width: number, height: number) => {
    try {
      if (!uri) {
        throw new Error("A URI da imagem não foi definida.");
      }

      const imagePartsTemp: string[] = [];
      const numParts = 5;
      const partWidth = width / numParts;

      for (let i = 0; i < numParts; i++) {
        const cropResult = await ImageManipulator.manipulateAsync(
          uri,
          [
            {
              crop: {
                originX: partWidth * i,
                originY: (height - heights[i]) / 2, // Centraliza o corte verticalmente
                width: partWidth,
                height: heights[i],
              },
            },
          ],
          { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        );
        imagePartsTemp.push(cropResult.uri);
      }

      setImageParts(imagePartsTemp);
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao manipular a imagem.");
      console.error(error);
    }
  };

  return (
    <>
     <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View>
      <View style={{ alignItems: "center", position: 'absolute', bottom: -10, right: "-32.5%", justifyContent: "center"}}>
        {imageUri && (
          <FlatList
            data={imageParts}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Svg
                height={heights[index]}
                width={partWidth}
                style={{
                  marginHorizontal: spacing / 5,
                  alignSelf: "center",
                }}
              >
                <SvgImage
                  x={0}
                  y={0}
                  width={partWidth}
                  height={heights[index]}
                  href={{ uri: item }}
                />
              </Svg>
            )}
          />
        )}
      </View>
      </View>
    </View>
      <View mt={15}>
          <Button
            bg={'#B9985C'}
            color={'#fff'}
            borderWidth={1}
            borderColor={'#86692F'}
            borderRadius={999}
            onPress={pickImage}
          >
            Selecionar imagem
          </Button>
        </View>

    </>
   
  );
};

export default MosaicFrame;
