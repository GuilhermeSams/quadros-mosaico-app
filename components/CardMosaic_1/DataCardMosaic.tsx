import { ElementType, ReactNode } from "react";
import Frame_1 from "./FrameMosaics/Frame-1";
import Frame_2 from "./FrameMosaics/Frame-2";
import Frame_3 from "./FrameMosaics/Frame-3";
import Frame_4 from "./FrameMosaics/Frame-4";
import Frame_5 from "./FrameMosaics/Frame-5";
import Frame_6 from "./FrameMosaics/Frame-6";
import Frame_7 from "./FrameMosaics/Frame-7";
import Frame_8 from "./FrameMosaics/Frame-8";
import Frame_9 from "./FrameMosaics/Frame-9";
import Frame_10 from "./FrameMosaics/Frame-10";

export type InfoCard = {
  mosaicType: string;
  ratingStars: number;
  description: string;
  price: number;
  cents: number;
  totalLength: number;
  frameDescription_p1: string;
  frameDescription_p2: string;
  component: React.ElementType;
  frameSizes: string[];
  heights?: number[];
};

export const DataCardMosaic: InfoCard[] = [
  {
    ratingStars: 4.5,
    mosaicType: "Mosaic1",
    description: "5 Mosaicos semétrico tamanho normal",
    price: 300,
    cents: 50,
    totalLength: 1.5,
    frameDescription_p1: "Quadro Mosaico Personalizado! Feito em placa de MDF de alta qualidade, este mosaico é composto por 5 peças de tamanhos variados, trazendo um visual moderno e sofisticado para qualquer ambiente.",
    frameDescription_p2: "Com aplicação fácil, o quadro já vem acompanhado de cola dupla face 3M, garantindo uma fixação segura e prática, sem a necessidade de furos na parede.",
    component: Frame_1,
    frameSizes: [
      "1 peça de 70x30cm",
      "2 peças de 60x30cm",
      "2 peças de 50x30cm"
    ],
    heights: [420, 460, 500, 460, 420],
  },
  {
    ratingStars: 4,
    mosaicType: "Mosaic2",
    description: "5 Mosaicos semétrico tamanho grande",
    price: 350,
    cents: 50,
    totalLength: 1.5,
    frameDescription_p1: "Quadro Mosaico Personalizado! Feito em placa de MDF de alta qualidade, este mosaico grande é composto por 5 peças de tamanhos variados, trazendo um visual moderno e sofisticado para qualquer ambiente.",
    frameDescription_p2: "Com aplicação fácil, o quadro já vem acompanhado de cola dupla face 3M, garantindo uma fixação segura e prática, sem a necessidade de furos na parede.",
    component: Frame_2,
    frameSizes: [
      "1 peça de 80x35cm",
      "2 peças de 70x35cm",
      "2 peças de 60x35cm"
    ],
    heights: [500, 500, 500],
  },
  {
    ratingStars: 4,
    mosaicType: "Mosaic3",
    description: "3 Mosaicos escalador tamanho normal",
    price: 250,
    cents: 70,
    totalLength: 1.5,
    frameDescription_p1: "Quadro Mosaico Personalizado! Feito em placa de MDF de alta qualidade, este mosaico é composto por 3 peças de tamanhos identicos, mas projetado num estilo de degrau, trazendo um visual moderno e sofisticado para qualquer ambiente.",
    frameDescription_p2: "Com aplicação fácil, o quadro já vem acompanhado de cola dupla face 3M, garantindo uma fixação segura e prática, sem a necessidade de furos na parede.",
    component: Frame_3,
    frameSizes: [
       "3 peças de 60x30cm"
    ],
    heights: [420, 460, 500],
  },
  {
    ratingStars: 3.5,
    mosaicType: "Mosaic4",
    description: "3 Mosaicos escalador tamanho pequeno",
    price: 300,
    cents: 10,
    totalLength: 1.5,
    frameDescription_p1: "Quadro Mosaico Personalizado! Feito em placa de MDF de alta qualidade, este mosaico pequeno é composto por 3 peças de tamanhos identicos, mas projetado num estilo de degrau, trazendo um visual moderno e sofisticado para qualquer ambiente.",
    frameDescription_p2: "Com aplicação fácil, o quadro já vem acompanhado de cola dupla face 3M, garantindo uma fixação segura e prática, sem a necessidade de furos na parede.",
    component: Frame_4,
    frameSizes: [
     "3 peças de 50x25cm"
    ],
  },
  {
    ratingStars: 5,
    mosaicType: "Mosaic5",
    description: "2 Mosaicos reto tamanho normal",
    price: 420,
    cents: 50,
    totalLength: 1.5,
    frameDescription_p1: "Quadro Mosaico Personalizado! Feito em placa de MDF de alta qualidade, este mosaico é composto por 2 peças de tamanhos identicos, trazendo um visual moderno e sofisticado para qualquer ambiente.",
    frameDescription_p2: "Com aplicação fácil, o quadro já vem acompanhado de cola dupla face 3M, garantindo uma fixação segura e prática, sem a necessidade de furos na parede.",
    component: Frame_5,
    frameSizes: [
     "2 peças de 60x50cm"
    ],
  },
  {
    ratingStars: 4.5,
    mosaicType: "Mosaic6",
    description: "3 Mosaicos reto tamanho normal",
    price: 390,
    cents: 10,
    totalLength: 1.5,
    frameDescription_p1: "Quadro Mosaico Personalizado! Feito em placa de MDF de alta qualidade, este mosaico é composto por 3 peças de tamanhos identicos, trazendo um visual moderno e sofisticado para qualquer ambiente.",
    frameDescription_p2: "Com aplicação fácil, o quadro já vem acompanhado de cola dupla face 3M, garantindo uma fixação segura e prática, sem a necessidade de furos na parede.",
    component: Frame_6,
    frameSizes: [
   "3 peças de 70x35cm"
    ],
  },
  {
    ratingStars: 4.5,
    mosaicType: "Mosaic7",
    description: "5 Mosaicos reto tamanho normal",
    price: 320,
    cents: 50,
    totalLength: 1.5,
    frameDescription_p1: "Quadro Mosaico Personalizado! Feito em placa de MDF de alta qualidade, este mosaico é composto por 5 peças de tamanhos identicos, trazendo um visual moderno e sofisticado para qualquer ambiente.",
    frameDescription_p2: "Com aplicação fácil, o quadro já vem acompanhado de cola dupla face 3M, garantindo uma fixação segura e prática, sem a necessidade de furos na parede.",
    component: Frame_7,
    frameSizes: [
        "5 peças de 70x30cm"
    ],
  },
  {
    ratingStars: 4,
    mosaicType: "Mosaic8",
    description: "5 Mosaicos reto tamanho grande",
    price: 300,
    cents: 50,
    totalLength: 1.5,
    frameDescription_p1: "Quadro Mosaico Personalizado! Feito em placa de MDF de alta qualidade, este mosaico grande é composto por 5 peças de tamanhos identicos, trazendo um visual moderno e sofisticado para qualquer ambiente.",
    frameDescription_p2: "Com aplicação fácil, o quadro já vem acompanhado de cola dupla face 3M, garantindo uma fixação segura e prática, sem a necessidade de furos na parede.",
    component: Frame_8,
    frameSizes: [
      "5 peças de 80x35cm"
    ],
  },
  {
    ratingStars: 5,
    mosaicType: "Mosaic9",
    description: "5 Mosaicos desordenado tamanho normal",
    price: 300,
    cents: 50,
    totalLength: 1.5,
    frameDescription_p1: "Quadro Mosaico Personalizado! Feito em placa de MDF de alta qualidade, este mosaico é composto por 5 peças de tamanhos variados, trazendo um visual moderno e sofisticado para qualquer ambiente.",
    frameDescription_p2: "Com aplicação fácil, o quadro já vem acompanhado de cola dupla face 3M, garantindo uma fixação segura e prática, sem a necessidade de furos na parede.",
    component: Frame_9,
    frameSizes: [
      "2 peças de 60x30cm",
      "1 peça de 65x30cm",
      "1 peça de 55x30cm",
      "1 peça de 70x30cm"
    ],
  },
  {
    ratingStars: 5,
    mosaicType: "Mosaic10",
    description: "5 Mosaicos intercalado tamanho normal",
    price: 500,
    cents: 50,
    totalLength: 1.5,
    frameDescription_p1: "Quadro Mosaico Personalizado! Feito em placa de MDF de alta qualidade, este mosaico é composto por 5 peças de tamanhos variados, trazendo um visual moderno e sofisticado para qualquer ambiente.",
    frameDescription_p2: "Com aplicação fácil, o quadro já vem acompanhado de cola dupla face 3M, garantindo uma fixação segura e prática, sem a necessidade de furos na parede.",
    component: Frame_10,
    frameSizes: [
     "5 peças de 80x35cm"
    ],
  },
];
