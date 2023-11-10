import React from "react";
import { BASE_URL } from "@/utils/api/apiConstants";

import {
  articleContainerCss,
  articleTitleCss,
  articleDescriptionCss,
  articleProductCss,
  articleProductContainer,
  articleProductImageCss,
  articleProductCardContainer,
  articleProductRightContainer,
  articleProductTitleCss,
  articleProductDescriptionCSs,
  articleProductButton,
} from "./ArticleStyle";

type Props = {
  data: any;
};

function ArticleComponent({ data }: Props) {

  const {
    thumbnailImage: { meta: { download_url = "" } = {} } = {},
    name,
    description,
    dataCards,
  } = data;
  
  return (
    <div css={articleContainerCss}>
      <div>
        <img src={`${BASE_URL}${download_url}`} alt="" />
      </div>
      <div css={articleTitleCss}>
        <h1>{name}</h1>
      </div>
      <div css={articleDescriptionCss}>
        <p>{description}</p>
      </div>
      {dataCards?.length ? (
        <>
          {dataCards.map((item: any, i: number) => {
            return (
              <div css={articleProductContainer} key={i}>
                {item.value.card_title ? (
                  <div css={articleProductCss}>
                    <h2>{item.value.card_title}</h2>
                  </div>
                ) : null}
                {item?.value?.cardDetails?.length &&
                  item?.value?.cardDetails.map((item1: any, i1: number) => {
                    return (
                      <>
                        <div css={articleProductCardContainer}>
                          <div css={articleProductImageCss}>
                            <img
                              src={`${item1.image.file}`}
                              width={294}
                              height={188}
                            />
                          </div>
                          <div css={articleProductRightContainer}>
                            {item1.title ? (
                              <div css={articleProductTitleCss}>
                                <h2>Minimalist Design Concept</h2>
                              </div>
                            ) : null}
                            {item1.description && (
                              <div css={articleProductDescriptionCSs}>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: item1.description,
                                  }}
                                ></p>
                              </div>
                            )}
                            {item1.buttonText && (
                              <div css={articleProductButton}>
                                <a>{item1.buttonText}</a>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
}

export default ArticleComponent;
