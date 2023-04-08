import React from "react";

export type MainPropType = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export type ProductType = {
  images: string[];
  title: string;
  rating: number;
  ratingQuantity: number;
  price: number;
  discount?: number;
};
