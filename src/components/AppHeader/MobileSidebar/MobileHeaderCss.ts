import { globalContainerColor, globalTextColor } from "@/styles/colors";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const mobileheader_container = css`
display:flex;
justify-content:space-between;
padding:10px 20px;
border-bottom:1px solid #dbdbdb;
-webkit-animation: expand 1s;
@-webkit-keyframes expand {
  0% {
    height: 0px;
  }
  100% {
    height: 18vh;
  }
}
`;
export const mobileheader_hamburger =  (hideMenu=false) => css`
  ${hideMenu && `display: none`}
`;

export const mobileheader_kohler = (hideMenu=false) => css`
  ${hideMenu && `display: none;`};
  margin-top:-15px;
`;

export const mobileheader_search = (hideMenu=false) => css`
  ${hideMenu && `width: 100%;`};
 
`;

