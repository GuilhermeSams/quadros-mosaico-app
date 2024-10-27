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
  component: React.ElementType;
};

export const DataCardMosaic: InfoCard[] = [
  {
    ratingStars: 4.5,
    mosaicType: "Mosaic1",
    description: "5 Mosaicos semétrico tamanho normal",
    price: 300,
    cents: 50,
    component: Frame_1,
  },
  {
    ratingStars: 4,
    mosaicType: "Mosaic2",
    description: "5 Mosaicos semétrico tamanho grande",
    price: 350,
    cents: 50,
    component: Frame_2,
  },
  {
    ratingStars: 4,
    mosaicType: "Mosaic3",
    description: "3 Mosaicos escalador tamanho normal",
    price: 250,
    cents: 70,
    component: Frame_3,
  },
  {
    ratingStars: 3.5,
    mosaicType: "Mosaic4",
    description: "3 Mosaicos escalador tamanho pequeno",
    price: 300,
    cents: 10,
    component: Frame_4,
  },
  {
    ratingStars: 5,
    mosaicType: "Mosaic5",
    description: "2 Mosaicos reto tamanho normal",
    price: 420,
    cents: 50,
    component: Frame_5,
  },
  {
    ratingStars: 4.5,
    mosaicType: "Mosaic6",
    description: "3 Mosaicos reto tamanho normal",
    price: 390,
    cents: 10,
    component: Frame_6,
  },
  {
    ratingStars: 4.5,
    mosaicType: "Mosaic7",
    description: "5 Mosaicos reto tamanho normal",
    price: 320,
    cents: 50,
    component: Frame_7,
  },
  {
    ratingStars: 4,
    mosaicType: "Mosaic8",
    description: "5 Mosaicos reto tamanho grande",
    price: 300,
    cents: 50,
    component: Frame_8,
  },
  {
    ratingStars: 5,
    mosaicType: "Mosaic9",
    description: "5 Mosaicos desordenado tamanho normal",
    price: 300,
    cents: 50,
    component: Frame_9,
  },
  {
    ratingStars: 5,
    mosaicType: "Mosaic10",
    description: "5 Mosaicos intercalado tamanho normal",
    price: 500,
    cents: 50,
    component: Frame_10,
  },
];
