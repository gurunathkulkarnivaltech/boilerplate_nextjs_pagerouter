import React, { useEffect, useState } from 'react'
import ArticleComponent from '@/components/ArticleComponent/ArticleComponent';
import { PAGE_API_URL } from '@/utils/api/apiConstants';
import { get } from '@/utils/api/apiMethods';


type Props = {}

export default function Article({}: Props) {
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
        callGetApi()
    }, []);

    const callGetApi = async() => {
        const data = await get({url: `${PAGE_API_URL}/8`})
        if (data) {
            setArticleData(data);
        }
    }

  return (
    <div>
        <ArticleComponent data={articleData}/>
    </div>
  )
}