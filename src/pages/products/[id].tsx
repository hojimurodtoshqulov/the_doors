import ProductPage from "@/modules/ProductPage";
import { API_URL } from "@/shared/constants";
import { ProductType } from "@/shared/types";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  // Generate an array of paths based on product IDs
  const paths = [
    {
      params: { id: "1" },
    },
    {
      params: { id: "2" },
    },
    {
      params: { id: "3" },
    },
    {
      params: { id: "4" },
    },
    {
      params: { id: "5" },
    },
    {
      params: { id: "6" },
    },
  ];

  return {
    paths,
    fallback: true, // Set to 'false' if you don't have other dynamic paths
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{
  id: string;
}>) {
  const id = params?.id;

  try {
    const products = await axios.get(`${API_URL}/api/products/${id}`);

     return {
      props: {
        product: products.data,
      },
      revalidate: 60, // Re-generate the page every 60 seconds (1 minute)
    };
  } catch (error) {
    console.log(error);
  }
}

export default function Home({product}:{product:ProductType}) {
  return <ProductPage product={product}/>;
}
