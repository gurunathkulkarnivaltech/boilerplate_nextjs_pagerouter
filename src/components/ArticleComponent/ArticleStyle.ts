import { globalContainerColor, globalTextColor } from "@/styles/colors";
import { css } from "@emotion/react";

export const articleContainerCss = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const articleTitleCss = css`
  font-family: HelveticaLight,Helvetica,sans-serif;
  font-weight: 400;
  padding: 30px 100px 30px 0px;
  display: flex;
`

export const articleDescriptionCss = css`
  background: #fff;
  color: #232323;
  font-size: 14px;
  width: 55%;
  padding: 30px 1px 30px 0px;
  font-family: HelveticaLight,Helvetica,sans-serif;
  overflow: auto;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
`

export const articleProductContainer = css `
  display: flex;
  flex-direction: column;
  width: 55%;
`;

export const articleProductCardContainer = css`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
`;

export const articleProductRightContainer = css`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 25px 0px 0px 30px; 
`;
export const articleProductCss = css`
    border-bottom: 1px solid #e8e8e8;
    padding: 30px 1px 30px 0px;
    display: flex;
    justify-content: flex-start;
`;

export const articleProductImageCss = css`
  padding: 30px 0 30px 0px;
`;


export const articleProductTitleCss = css`

`;

export const articleProductDescriptionCSs = css`
  padding: 15px 0px 0px 0px;
`;


export const articleProductButton = css `
    background: #000;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.2);
    color: #fff;
    display: inline-block;
    font-family: HelveticaBold,Helvetica,sans-serif;
    font-size: 14px;
    margin: 10px 0 0;
    outline: 0;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 208px;
    height: 40px;
`;