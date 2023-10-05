"use client";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import {
  gridLayout,
  gridItem,
  container,
  titleCss,
  descriptionCss,
  imageCardCss,
  titleCssHeader,
} from "./CardLayoutCss";

type Props = {
  title?: string;
  data: any;
};

const CardLayout = ({ data, title }: Props) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    980: 3,
    700: 1,
    500: 1,
  };
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (window && window.innerWidth) {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <>
      <div css={container}>
        {title && (
          <div css={titleCssHeader}>
            <h1>{title}</h1>
          </div>
        )}

        {/* <div css={gridLayout(windowWidth)}>
          {data.map((item: any, index: number) => {
            return (
              <div key={index} css={gridItem}>
                <img src={item.img} css={imageCardCss} />
                <div css={titleCss}>{item.title}</div>
                <div css={descriptionCss}>{item.description}</div>
              </div>
            );
          })}
        </div> */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((item: any, index: number) => {
            return (
              <div key={index} css={gridItem}>
                <img src={item.img} css={imageCardCss} />
                <div css={titleCss}>{item.title}</div>
                <div css={descriptionCss}>{item.description}</div>
              </div>
            );
          })}
        </Masonry>
      </div>
    </>
  );
};

export default CardLayout;

const data = [
  {
    img: "https://s7d4.scene7.com/is/image/kohlerchina/2022%20most%20innovative%20bathroom%20products%20%E2%80%93Moxie%20Numi%20GCS_Secondary%20banner%20290%20x%20232",
    title: "Innovative Bathroom Products for 2022",
    description:
      "Turn your bathroom into a home spa with cutting-edge products.",
  },
  {
    img: "https://s7d4.scene7.com/is/image/kohlerchina/2022%20most%20innovative%20bathroom%20products%20%E2%80%93Moxie%20Numi%20GCS_Secondary%20banner%20290%20x%20232",
    title: "Innovative Bathroom Products for 2022",
    description:
      "Turn your bathroom into a home spa with cutting-edge products.",
  },
  {
    img: "https://s7d4.scene7.com/is/image/kohlerchina/2022%20most%20innovative%20bathroom%20products%20%E2%80%93Moxie%20Numi%20GCS_Secondary%20banner%20290%20x%20232",
    title: "Innovative Bathroom Products for 2022",
    description:
      "Turn your bathroom into a home spa with cutting-edge products.",
  },
  {
    img: "https://s7d4.scene7.com/is/image/kohlerchina/2022%20most%20innovative%20bathroom%20products%20%E2%80%93Moxie%20Numi%20GCS_Secondary%20banner%20290%20x%20232",
    title: "Innovative Bathroom Products for 2022",
    description:
      "Turn your bathroom into a home spa with cutting-edge products.",
  },
  {
    img: "https://s7d4.scene7.com/is/image/kohlerchina/2022%20most%20innovative%20bathroom%20products%20%E2%80%93Moxie%20Numi%20GCS_Secondary%20banner%20290%20x%20232",
    title: "Innovative Bathroom Products for 2022",
    description:
      "Turn your bathroom into a home spa with cutting-edge products.",
  },
  {
    img: "https://s7d4.scene7.com/is/image/kohlerchina/2022%20most%20innovative%20bathroom%20products%20%E2%80%93Moxie%20Numi%20GCS_Secondary%20banner%20290%20x%20232",
    title: "Innovative Bathroom Products for 2022",
    description:
      "Turn your bathroom into a home spa with cutting-edge products.",
  },
  {
    img: "https://s7d4.scene7.com/is/image/kohlerchina/2022%20most%20innovative%20bathroom%20products%20%E2%80%93Moxie%20Numi%20GCS_Secondary%20banner%20290%20x%20232",
    title: "Innovative Bathroom Products for 2022",
    description:
      "Turn your bathroom into a home spa with cutting-edge products.",
  },
  {
    img: "https://s7d4.scene7.com/is/image/kohlerchina/2022%20most%20innovative%20bathroom%20products%20%E2%80%93Moxie%20Numi%20GCS_Secondary%20banner%20290%20x%20232",
    title: "Innovative Bathroom Products for 2022",
    description:
      "Turn your bathroom into a home spa with cutting-edge products.",
  },
  {
    img: "https://s7d4.scene7.com/is/image/kohlerchina/2022%20most%20innovative%20bathroom%20products%20%E2%80%93Moxie%20Numi%20GCS_Secondary%20banner%20290%20x%20232",
    title: "Innovative Bathroom Products for 2022",
    description:
      "Turn your bathroom into a home spa with cutting-edge products.",
  },
  {
    img: "https://s7d4.scene7.com/is/image/kohlerchina/2022%20most%20innovative%20bathroom%20products%20%E2%80%93Moxie%20Numi%20GCS_Secondary%20banner%20290%20x%20232",
    title: "Innovative Bathroom Products for 2022",
    description:
      "Turn your bathroom into a home spa with cutting-edge products.",
  },
];
