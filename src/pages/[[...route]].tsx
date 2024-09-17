import Head from "next/head";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Silder from "@/components/Silder/Silder";
import CardLayout from "@/components/CardLayout/CardLayout";
import { get } from "@/utils/api/apiMethods";
import SeoComponent from "@/components/SeoComponent/SeoComponent";

export async function getServerSideProps(appContext: any) {
  const { req, locale } = appContext;
  console.log("Coming")
  const response = await get({ url: "http://127.0.0.1:8000/api/v2/pages/7/" });
  console.log("Coming", response)
  let bannerData = [];
  let cardData = [];
  let seoDetails = {}
  if (response) {
    if (response?.banner_images?.length) {
      bannerData = response.banner_images;
    }
    if (response?.dataCards?.length) {
      cardData = response.dataCards;
    }
    if (response?.meta) {
      const {seo_title, search_description } = response.meta
      seoDetails = {
        seo_title, search_description
      }
    }
  }
  return {
    props: {
      bannerData, cardData, seoDetails
    },
  };
}

// export const getServerSideProps = async () => {
//   console.log("Hello")
//   const response = await get({ url: "http://192.168.1.4:8000/api/v2/pages/7/" });
//   console.log("Coming", response)
//   let bannerData = [];
//   let cardData = [];
//   if (response) {
//     if (response?.banner_images?.length) {
//       bannerData = response.banner_images;
//     }
//     if (response?.dataCards?.length) {
//       cardData = response.dataCards;
//     }
//   }
//   return {
//     props: {
//       bannerData, cardData
//     },
//   };
// };

export default function Home({ bannerData = [], cardData = [], seoDetails }: any) {

  return (
    <>
      <SeoComponent {...seoDetails} />
      <Silder bannerData={bannerData} />
      <CardLayout data={cardData} />
    </>
  );
}
