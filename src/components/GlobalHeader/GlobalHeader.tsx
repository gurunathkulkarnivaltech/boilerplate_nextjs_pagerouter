import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  GlobalHeaderContainer,
  companyContainer,
  companyLabel,
  globeImageCss,
  langCss,
  langContainer,
  leftCss,
  rightCss,
  imgCss,
  separatorCss,
  storeContainer,
  storeCss
} from "./GlobalHeaderCss";
import { icons } from "@/assets/images";
import Image from "next/image";
import { GlobalSubMenu } from "./GlobalSubMenu";

type Props = {};

export default function GlobalHeader({}: Props) {
  const router = useRouter();
  const [isDropDownClicked, setIsDropDownClicked] = useState(false);

  const handleDropDown = () => {
    setIsDropDownClicked(!isDropDownClicked);
  };

  const handleClick = () => {
    router.push("/contactus")
  }

  return (
    <>
      <GlobalHeaderContainer>
        <div css={leftCss}>
          <div css={companyContainer}>
            <div css={globeImageCss}>
              <Image src={icons.globe} alt="globe" css={imgCss} />
            </div>
            <div css={companyLabel} onClick={handleDropDown}>KOHLER Company</div>
            <div onClick={handleDropDown}>
              <Image src={isDropDownClicked ? icons.upArrowIcon :icons.arrowDown} alt="globe" css={imgCss} />
            </div>
          </div>
          <div css={langContainer}>
            <div css={langCss}>VN</div>
            <div css={separatorCss}>|</div>
            <div css={langCss}>EN</div>
          </div>
        </div>
        <div css={rightCss}>
          <div css={storeContainer}>
            <div>
              <Image src={icons.locationIcon} alt="location" css={imgCss} />
            </div>
            <div css={storeCss}>Find a store</div>
          </div>
          <div css={storeContainer} onClick={handleClick}>
            <div>
              <Image src={icons.mailIcon} alt="location" css={imgCss} />
            </div>
            <div css={storeCss}>Contact Us</div>
          </div>
        </div>
      </GlobalHeaderContainer>
      {isDropDownClicked ? (
       <>
       <GlobalSubMenu imageData={imageData} data={data} isDropDown={isDropDownClicked}/>
       </>
      ): null}
    </>
  );
}

const imageData = [
  "https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/ann_sacks_sized.png",
  "https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/robern_sized.png",
  "https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/kallista_sized.png",
  "https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/sterling_sized.png",
  "https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/kohler-generators_sized.png",

  "https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/ann_sacks_sized.png",
  "https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/robern_sized.png",
  "https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/kallista_sized.png",
  "https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/sterling_sized.png",
  "https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/kohler-generators_sized.png",
];

const data = [
  {
    country: "North America",
    regions: [
      "Bahamas",
      "Canada",
      "Cayman Islands",
      "Costa Rica",
      "Dominican Republic",
      "El Salvador",
      "Guatemala",
      "Honduras",
      "Jamaica",
      "Mexico",
      "Nicaragua",
      "Panama",
      "Puerto Rico",
      "Turks & Caicos",
      "United States",
    ],
  },
  {
    country: "South America",
    regions: [
      "Bahamas",
      "Canada",
      "Cayman Islands",
      "Costa Rica",
      "Dominican Republic",
      "El Salvador",
      "Guatemala",
      "Honduras",
      "Jamaica",
      "Mexico",
      "Nicaragua",
      "Panama",
    ],
  },
  {
    country: "Europe, the Middle East and Africa",
    regions: ["Bahamas", "Canada", "Cayman Islands", "Costa Rica"],
  },
  {
    country: "Asia Pacific",
    regions: [
      "Bahamas",
      "Canada",
      "Cayman Islands",
      "Costa Rica",
      "Dominican Republic",
      "El Salvador",
      "Guatemala",
      "Honduras",
      "Jamaica",
      "Mexico",
      "Nicaragua",
      "Panama",
      "Puerto Rico",
      "Turks & Caicos",
      "United States",
    ],
  },
  {
    country: "KOHLER Co. Kitchen & Bath Brands",
    regions: [
      "Bahamas",
      "Canada",
      "Cayman Islands",
      "Costa Rica",
      "Dominican Republic",
      "El Salvador",
      "Guatemala",
      "Honduras",
      "Jamaica",
      "Mexico",
      "Nicaragua",
      "Panama",
      "Puerto Rico",
      "Turks & Caicos",
      "United States",
    ],
  },
];
