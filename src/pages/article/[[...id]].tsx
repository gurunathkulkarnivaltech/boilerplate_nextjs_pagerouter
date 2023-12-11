import React, { useEffect, useState } from "react";
import ArticleComponent from "@/components/ArticleComponent/ArticleComponent";
import { PAGE_API_URL } from "@/utils/api/apiConstants";
import { get } from "@/utils/api/apiMethods";
import SeoComponent from "@/components/SeoComponent/SeoComponent";

type Props = {
  seoDetails: any;
  params: any;
};

export async function getServerSideProps(appContext: any) {
  const { req, params } = appContext;
  console.log(params)
  const data = await get({ url: `${PAGE_API_URL}/${params.id}` });
  let seoDetails = {};
  if (data?.meta) {
    const { seo_title, search_description } = data.meta;
    seoDetails = {
      seo_title,
      search_description,
    };
  }
  return {
    props: {
      seoDetails,
      params
    },
  };
}

export default function Article({ seoDetails, params }: Props) {
    const [articleData, setArticleData] = useState([]);
    useEffect(() => {
        callGetApi()
    }, []);

    const callGetApi = async() => {
        const data = await get({url: `${PAGE_API_URL}/${params.id}`})
        if (data) {
            setArticleData(data);
        }
    }
  return (
    <div>
       <SeoComponent {...seoDetails} />
      <ArticleComponent data={articleData} />
    </div>
  );
}
