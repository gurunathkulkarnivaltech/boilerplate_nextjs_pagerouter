import { globalContainerColor, globalTextColor } from "@/styles/colors";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const GlobalHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  background: ${globalContainerColor};
`;

export const submenuCss = css`
  display: flex;
  width: 100%;
  padding-top: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  background: ${globalContainerColor};
  justify-content: center;
`;
export const companyContainer = css`
  display: flex;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  padding: 0px 10px;
`;

export const globeImageCss = css`
  padding: 0px 5px;
`;

export const companyLabel = css`
  padding: 0px 5px;
  color: ${globalTextColor};
  font-family: HelveticaLight, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 30px;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
`;

export const langCss = css`
  color: ${globalTextColor};
  line-height: 30px;
  font-size: 13px;
  padding: 0px 5px;
  font-family: HelveticaLight, Helvetica, sans-serif;
`;

export const langContainer = css`
  display: flex;
  padding: 0px 10px;
`;

export const storeContainer = css`
  display: flex;
  padding: 0px 15px;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  font-family: HelveticaLight, Helvetica, sans-serif;
`;
export const storeCss = css`
  color: ${globalTextColor};
  line-height: 30px;
  font-size: 13px;
  padding: 0px 5px;
`;

export const leftCss = css`
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  left: 9%;
`;
export const rightCss = css`
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  right: 5%;
`;

export const imgCss = css`
  width: 20px;
  height: auto;
  padding-top: 5px;
`;
export const separatorCss = css`
  color: ${globalTextColor};
  margin: 7px;
  background: ${globalTextColor};
  width: 7%;
  font-size: 8px;
`;

export const regionCss = css`
  color: ${globalTextColor};
  font-family: HelveticaLight, Helvetica, sans-serif;
  font-size: 13px;
  padding: 10px 10px;
`;

export const countryCss = css`
  color: #e5e5e5;
  font-family: HelveticaLight, Helvetica, sans-serif;
  font-size: 13px;
  padding: 10px;
  margin-bottom: -15px;
`;
export const listContainer = css`
  color: #999;
  font-family: HelveticaLight, Helvetica, sans-serif;
  font-size: 13px;
  width: 12%;
`;

export const submenufooterCss = css`
  color: #999;
  font-family: HelveticaLight, Helvetica, sans-serif;
  font-size: 13px;
  background: ${globalContainerColor};
  display: flex;
  border-top: 1px solid #333;
  justify-content: center;
`;

export const footerimgCss = css`
  border-right: 1px solid #333;
  width: 5%;
  padding: 30px 20px;
`;
export const submenuContainer = () => css`
  -webkit-animation: expand 1s;
  @-webkit-keyframes expand {
    0% {
      height: 0px;
    }
    100% {
      height: 70vh;
    }
  }
`;

export const submenuCollapse = css`
  -webkit-animation: collapse 3s;

  @-webkit-keyframes collapse {
    0% {
      height: 80vh;
    }
    100% {
      height: 0px;
    }
  }
`;
