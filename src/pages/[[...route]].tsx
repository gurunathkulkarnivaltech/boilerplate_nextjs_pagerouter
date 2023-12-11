import Head from "next/head";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Silder from "@/components/Silder/Silder";
import CardLayout from "@/components/CardLayout/CardLayout";
import { get } from "@/utils/api/apiMethods";
import SeoComponent from "@/components/SeoComponent/SeoComponent";

export async function getServerSideProps(appContext: any) {
  const { req, locale } = appContext;

  const response = await get({ url: "http://www.example.com:8000/api/v2/pages/7/" });
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
      {/* <Head>
        <title>{seoDetails.seo_title}</title>
        <meta name="description" content={seoDetails.search_description} />
        <meta name="og-description" content={seoDetails.search_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <SeoComponent {...seoDetails} />
      <Silder bannerData={bannerData} />
      <CardLayout data={cardData} />
    </>
  );
}
