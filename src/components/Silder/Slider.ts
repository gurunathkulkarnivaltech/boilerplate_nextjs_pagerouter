import { globalContainerColor, globalTextColor } from "@/styles/colors";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const silderContainer = css`
    // display: none
    .slick-slider {

        .slick-prev {
            left: 3% !important;
            z-index: 1;
          }
          .slick-next {
            right: 3% !important;
            z-index: 1;
          }
        
        .slick-dots {
            margin-bottom: 50px; !imporntant;
        }
        .slick-dots li.slick-active button:before {
            margin-bottom: 50px; !imporntant;
            color:White !important;
            border-color: white; !important;
            font-family: 'slick';!important;
            font-size: 6px;!important;
            line-height: 20px;!important;
        }
        .slick-dots li button:before {
            background-color: #FFF;!important;
            height: 10px;!important;
            width: 10px;!important;
            text-indent: -9999px;!important;
            overflow:hidden; !important;
            }
    }
`;

export const imageSilderCss = css`
  width: 100%;
  height: auto;
`;
