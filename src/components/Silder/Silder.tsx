import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageSilderCss, silderContainer } from "./Slider";
import { DynamicObject } from "@/utils/commonUtils/commonTypes";

type Props = {
  bannerData: any;
};


export default function Silder({ bannerData }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <div css={silderContainer}>
      <Slider {...settings}>
        {bannerData.map((item: DynamicObject, index: number) => {
          return (
            <div key={index} >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img css={imageSilderCss} src={item.imageUrl} alt="image" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
