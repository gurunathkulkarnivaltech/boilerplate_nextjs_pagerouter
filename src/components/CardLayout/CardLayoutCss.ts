import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e4e4e4;
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }
  
  /* Style your items */
  .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 30px;
  }
`;

export const gridLayout = (windowWidth: number) => css`
  ${windowWidth <= 768 ? `` : `display: grid;`}
  grid-template-columns: auto auto auto;
`;

export const titleCssHeader = css`
  margin: 10px 10px

`;

export const gridItem = css`
  font-size: 30px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  width: 333px;
  margin-bottom: 20px;
`;

export const titleCss = css`
  padding: 24px 0 20px;
  font:
    24px/32px HelveticaLight,
    Helvetica,
    sans-serif;
  color: #232323;
  text-transform: none;

  background: #fff
`;

export const descriptionCss = css`
  padding: 0 14px 24px;
  font:
    16px/22px HelveticaLight,
    Helvetica,
    sans-serif;
  color: #666;
 
  background: #fff
`;

export const imageCardCss = css`
    width: 100%;
    min-height: 330px;
   
    background: #fff
`;
