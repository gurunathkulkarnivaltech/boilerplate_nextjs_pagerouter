import { globalContainerColor, globalTextColor } from "@/styles/colors";
import { css } from "@emotion/react";

export const footerSubmenuCss = css`
  display: flex;
  width: 100%;
  padding-top: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  background: ${globalContainerColor};
  justify-content: center;
`;

export const listContainerFooter = css`
  color: #999;
  font-family: HelveticaLight, Helvetica, sans-serif;
  font-size: 13px;
  width: 12%;
`;

export const footerItemCss = css`
  color: #e5e5e5;
  font-family: HelveticaLight, Helvetica, sans-serif;
  font-size: 13px;
  padding: 10px;
  margin-bottom: -15px;
`;

export const itemCssFooter = css`
  color: ${globalTextColor};
  font-family: HelveticaLight, Helvetica, sans-serif;
  font-size: 13px;
  padding: 10px 10px;
`;