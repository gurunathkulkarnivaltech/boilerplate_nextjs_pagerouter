import { globalContainerColor, globalTextColor } from "@/styles/colors";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const menuContainer = (innerWidth: number) => css`
  display: flex;
  width: 100%;
  padding-top: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  background: #fff;
  ${innerWidth > 980 ? `justify-content: center;` :  `` }
  
`;
export const imgCss = css`
  width: auto;
  height: auto;
  padding-top: 5px;
`;

export const searchItemCss = css`
    padding:40px 30px;  
`;


export const menuItemCss = css`
padding:40px 30px;
  color: #232323;
  font-size: 16px;
  &:hover {
    background-image: linear-gradient(to bottom,#f7f7f7 0,#e5e5e5 100%);
  }

  &:active{
    background-image: linear-gradient(to bottom,#f7f7f7 0,#e5e5e5 100%);
  }
`;

export const menuItemContainer = css`
  display: flex;
  width: 50%;
  font-family: HelveticaLight, Helvetica, sans-serif;

`;
export const submenuContainer = css`
  display: flex;
  width: 100%;
  padding-top: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  background: #e5e5e5;
  color: #232323;
  box-shadow: 0 3px 8px 0 #666;
  justify-content: center;
 
`;

export const headersubmenu_container = css`

  width: 100%;
  background: #fff;
  justify-content: center;
  padding-top: 44px;
  padding-bottom: 69px;
  padding-left: calc((100% - 980px)/ 2);
  padding-right: calc((100% - 980px)/ 2);
  position: fixed; /* Stay in place */
  z-index: 1; 
    
`;

export const headersubmenu_titlediv = css`

`;

export const headersubmenu_title = css`
text-transform:uppercase;
font-size:30px;
font-family: HelveticaRoman,Helvetica,sans-serif;
`;
export const headersubmenu_list_container = css`
padding:20px 60px 20px 0px;
`;

export const headersubmenu_list_menu = css`
color:#666;
font-size:14px;
font-family: HelveticaRoman,Helvetica,sans-serif;
padding:5px 0px;
font-weight:400;
`;

export const headersubmenu_list_title = css`
font-size:14px;
color:#000;
font-family: HelveticaRoman,Helvetica,sans-serif;
padding:5px 0px;
font-weight:600;
`;

export const headersubmenu_list_main=css`

display:flex;
`;