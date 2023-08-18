import ProductImageSlider from "@/components/ProductImageSlider";
import Title from "@/components/Title";
import { ProductType } from "@/shared/types";
import React from "react";
 import { useTarjima } from "@/utils/getContent";
import ProductDescription from "./ProductDescription";

function ProductPage({ product }: { product?: ProductType }) {
    const getContent = useTarjima();

  return (
    <div style={{ marginTop: 200 }}>
      <Title style={{ padding: "0 8% 5vw" }}>          {getContent(product?.titleRu, product?.titleUz)}
 </Title>
      <ProductImageSlider
        attachmentContentIds={product?.attachmentContentIds}
      />

      <ProductDescription product={product}/>
      
    </div>
  );
}

export default ProductPage;
