import React, { useState, useCallback } from "react";
import {
  View,
  Image,
  ScrollView,
  Button,
  Input,
  AlertDialog,
  XStack,
  YStack,
} from "tamagui";
import { RefreshControl } from "react-native";
import MosaicFrame from "@/components/InputImageMosaic/InputImageMosaic";
import { Text } from "react-native";
import MaskInput from "react-native-mask-input";
import { Alert, Modal, StyleSheet, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useLocalSearchParams } from "expo-router";

export default function ScreenCustomFrame() {
  const params = useLocalSearchParams();
  const { mosaicType } = params;

  const [isImageSelected, setIsImageSelected] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [cep, setCep] = useState("");

  const handleImageSelected = () => {
    setIsImageSelected(true);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setIsImageSelected(false);
    }, 2000);
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const getImageSource = () => {
    switch (mosaicType) {
      case "Mosaic1":
        return require("../../../../assets/images/sala_mosaico_01.png");
      case "Mosaic2":
        return require("../../../../assets/images/sala_mosaico_02.png");
      case "Mosaic3":
        return require("../../../../assets/images/sala_mosaico_03.png");
      case "Mosaic4":
        return require("../../../../assets/images/sala_mosaico_04.png");
      case "Mosaic5":
        return require("../../../../assets/images/sala_mosaico_05.png");
      case "Mosaic6":
        return require("../../../../assets/images/sala_mosaico_06.png");
      case "Mosaic7":
        return require("../../../../assets/images/sala_mosaico_07.png");
      case "Mosaic8":
        return require("../../../../assets/images/sala_mosaico_08.png");
      case "Mosaic9":
        return require("../../../../assets/images/sala_mosaico_09.png");
      case "Mosaic10":
        return require("../../../../assets/images/sala_mosaico_10.png");
      default:
        return require("../../../../assets/images/sala_mosaico_01.png");
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View ml={15}>
        <Text className="font-[KohoLight]">120 Vendidos</Text>
        <Text className="font-[Koho]">5 Mosaicos semétrico tamanho normal</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={
            isImageSelected
              ? require("../../../../assets/images/sala_sem_sofa.png")
              : getImageSource()
          }
        />
        <MosaicFrame
          onImageSelected={handleImageSelected}
          refreshing={refreshing}
        />
      </View>
      <View marginHorizontal={15}>
        <View mt={20} bg={"#DDD3C0"} borderRadius={6} w={110} padding={8}>
          <Text className="text-xs">Largura total:</Text>
          <Text className="text-xs">1.50m</Text>
        </View>
        <View>
          <Text className="text-sm line-through">R$ 340,00</Text>
          <View className="flex flex-row">
            <Text className="text-2xl">R$ 300,00</Text>
            <Text className="text-[#00B627]">18% OFF</Text>
          </View>
          <Text className="text-[#00B627]">em 10x R$ 30,00 sem juros</Text>
        </View>
        <View my={20}>
          <Button
            bg={"#B9985C"}
            color={"#fff"}
            borderWidth={1}
            borderColor={"#86692F"}
            borderRadius={999}
            marginHorizontal={40}
            marginBottom={15}
          >
            Comprar agora
          </Button>
          <Button
            color={"#86692F"}
            borderWidth={1}
            borderColor={"#86692F"}
            borderRadius={999}
            marginHorizontal={40}
          >
            Adicionar ao carrinho
          </Button>
        </View>
        <View>
          <Text className="text-[#939393] mb-1">
            Informe o CEP para calcular o frete:
          </Text>
          <View className="flex flex-row">
            <MaskInput
              keyboardType="numeric"
              style={{
                backgroundColor: "#ffffff",
                height: 44,
                fontSize: 15,
                width: 210,
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
                paddingLeft: 10,
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
                borderLeftWidth: 0.5,
                borderColor: "#86692F",
              }}
              value={cep}
              onChangeText={(masked, unmasked) => {
                setCep(masked);
                console.log(masked);
                console.log(unmasked);
              }}
              mask={[/\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
            />
            <Button
              onPress={() => setModalVisible(true)}
              className="font-bold text-[#B9985C] w-16 border-[0.5px] rounded-l-none border-[#B9985C]"
            >
              OK
            </Button>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <View style={styles.modalView}>
                  <Pressable
                    style={{ marginLeft: "auto" }}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <AntDesign name="close" size={28} color="#86692F" />
                  </Pressable>
                  <View className="flex flex-row">
                    <MaskInput
                      keyboardType="numeric"
                      style={{
                        backgroundColor: "#ffffff",
                        height: 44,
                        fontSize: 15,
                        width: 120,
                        borderTopLeftRadius: 6,
                        borderBottomLeftRadius: 6,
                        paddingLeft: 10,
                        borderTopWidth: 0.5,
                        borderBottomWidth: 0.5,
                        borderLeftWidth: 0.5,
                        borderColor: "#86692F",
                      }}
                      value={cep}
                      onChangeText={(masked, unmasked) => {
                        setCep(masked);
                        console.log(masked);
                        console.log(unmasked);
                      }}
                      mask={[
                        /\d/,
                        /\d/,
                        ".",
                        /\d/,
                        /\d/,
                        /\d/,
                        "-",
                        /\d/,
                        /\d/,
                        /\d/,
                      ]}
                    />
                    <Button className="font-bold text-[#B9985C] w-28 border-[0.5px] rounded-l-none border-[#B9985C]">
                      ALTERAR
                    </Button>
                  </View>
                  <View my={12}>
                    <View flexDirection="row" justifyContent="space-between">
                      <Text className="font-semibold text-[#717171]">
                        Entrega Econômica
                      </Text>
                      <Text className="font-semibold text-[#717171]">
                        R$ 26,20
                      </Text>
                    </View>
                    <Text className="ml-auto text-xs text-[#717171]">
                      Chegará até: 25/11/2024
                    </Text>
                  </View>
                  <View>
                    <View flexDirection="row" justifyContent="space-between">
                      <Text className="font-semibold text-[#717171]">
                        Entrega Expressa
                      </Text>
                      <Text className="font-semibold text-[#717171]">
                        R$ 30,71
                      </Text>
                    </View>
                    <Text className="ml-auto text-xs text-[#717171]">
                      Chegará até: 22/11/2024
                    </Text>
                  </View>
                  <View mt={6} fd={"row"} ai={"center"}>
                    <FontAwesome
                      style={{ marginRight: 4 }}
                      name="info-circle"
                      size={24}
                      color="#86692F"
                    />
                    <Text className="text-xs w-64 font-light text-[#717171]">
                      Os prazos de entrega começam a contar a partir da
                      confirmação de pagamento
                    </Text>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
        <View
          h={1}
          my={20}
          borderColor={"#717171"}
          borderBottomWidth={0.5}
        ></View>
        <View>
          <Text className="text-lg mb-3">Descrição do quadro:</Text>
          <Text className="text-xs">
            Quadro Mosaico Personalizado! Feito em placa de MDF de alta
            qualidade, este mosaico é composto por 5 peças de tamanhos variados,
            trazendo um visual moderno e sofisticado para qualquer ambiente.
          </Text>
          <View my={8} ml={6}>
            <Text>{"\u2023"} 1 peça de 70x30cm </Text>
            <Text>{"\u2023"} 2 peças de 60x30cm</Text>
            <Text>{"\u2023"} 2 peças de 50x30cm</Text>
          </View>
          <Text className="text-xs">
            Com aplicação fácil, o quadro já vem acompanhado de cola dupla face
            3M, garantindo uma fixação segura e prática, sem a necessidade de
            furos na parede.
          </Text>
        </View>
        <View
          h={1}
          my={20}
          borderColor={"#717171"}
          borderBottomWidth={0.5}
        ></View>

        <View>
          <Text className="text-lg mb-3">Avaliações</Text>
          <View mb={10}>
            <Text className="text-base font-medium">Guilherme Sampaio</Text>
            <View flexDirection="row" ai={"center"}>
              <StarRatingDisplay starSize={23} rating={5} />
              <Text className="ml-2 text-xs">16/11/2024</Text>
            </View>
            <Text>
              "Perfeito! A qualidade do quadro e a facilidade de instalação são
              incríveis. Minha sala ficou linda!"
            </Text>
          </View>
          <View mb={10}>
            <Text className="text-base font-medium">Guilherme Sampaio</Text>
            <View flexDirection="row" ai={"center"}>
              <StarRatingDisplay starSize={23} rating={5} />
              <Text className="ml-2 text-xs">16/11/2024</Text>
            </View>
            <Text>
              "Perfeito! A qualidade do quadro e a facilidade de instalação são
              incríveis. Minha sala ficou linda!"
            </Text>
          </View>
          <View mb={10}>
            <Text className="text-base font-medium">Guilherme Sampaio</Text>
            <View flexDirection="row" ai={"center"}>
              <StarRatingDisplay starSize={23} rating={5} />
              <Text className="ml-2 text-xs">16/11/2024</Text>
            </View>
            <Text>
              "Perfeito! A qualidade do quadro e a facilidade de instalação são
              incríveis. Minha sala ficou linda!"
            </Text>
          </View>
          <View mb={10}>
            <Text className="text-base font-medium">Guilherme Sampaio</Text>
            <View flexDirection="row" ai={"center"}>
              <StarRatingDisplay starSize={23} rating={5} />
              <Text className="ml-2 text-xs">16/11/2024</Text>
            </View>
            <Text>
              "Perfeito! A qualidade do quadro e a facilidade de instalação são
              incríveis. Minha sala ficou linda!"
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
