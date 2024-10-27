import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import { Svg, Image as SvgImage } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

const MosaicFrame = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageParts, setImageParts] = useState<string[]>([]);

  const pickImage = async () => {
    try {
      console.log("Abrindo o seletor de imagens...");
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      console.log("Imagem selecionada:", result);
      if (!result.canceled) {
        const uri = result.assets[0].uri;
        const originalWidth = result.assets[0].width;
        const originalHeight = result.assets[0].height;

        console.log(`URI da imagem: ${uri}`);
        console.log(
          `Dimensões da imagem: Largura=${originalWidth}, Altura=${originalHeight}`
        );

        // Verifica se a largura e altura são iguais
        if (originalWidth !== originalHeight) {
          Alert.alert(
            "Dimensões inválidas",
            "A imagem deve ter largura e altura iguais, por exemplo 1000x1000 pixels."
          );
          return;
        }

        // Redimensiona a imagem para 800px de largura (mantendo a proporção)
        const resizedImage = await ImageManipulator.manipulateAsync(
          uri,
          [{ resize: { width: 800 } }],
          { compress: 0.7, format: ImageManipulator.SaveFormat.PNG }
        );

        console.log("Imagem redimensionada:", resizedImage);

        setImageUri(resizedImage.uri); // Define a URI da imagem redimensionada
        splitImage(resizedImage.uri); // Chama a função para manipular a imagem
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao selecionar a imagem.");
      console.error("Erro ao selecionar a imagem:", error);
    }
  };

  const splitImage = async (uri: string) => {
    try {
      if (!uri) {
        throw new Error("A URI da imagem não foi definida.");
      }

      const imagePartsTemp: string[] = [];
      const width = 800;
      const height = 800;

      for (let i = 0; i < 5; i++) {
        const cropResult = await ImageManipulator.manipulateAsync(
          uri,
          [
            {
              crop: {
                originX: (width / 5) * i,
                originY: 0,
                width: width / 5,
                height: height,
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
      <Button title="Selecione uma Imagem" onPress={pickImage} />

      <View className="items-center, justify-center, m-auto">
        {imageUri && (
          <Svg height="400" width="800">
            {imageParts.map((partUri, index) => (
              <SvgImage
                key={index}
                x={index * 80} // Espaçamento horizontal entre os painéis
                y={0}
                width="80"
                height="380"
                href={{ uri: partUri }}
              />
            ))}
          </Svg>
        )}
      </View>
    </>
  );
};

export default MosaicFrame;
