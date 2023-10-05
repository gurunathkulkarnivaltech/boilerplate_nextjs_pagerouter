import React, { useEffect, useState } from "react";
import {
  mobileheader_container,
  mobileheader_hamburger,
  mobileheader_kohler,
  mobileheader_search,
} from "./MobileHeaderCss";
import Image from "next/image";
import { DynamicObject } from "@/utils/commonUtils/commonTypes";
import { icons } from "@/assets/images";
import Search from "@/components/SearchBox/SearchBox";

type Props = {
  onclick: any;
};

export default function MobileHeader({ onclick }: Props) {
  const [ hideItem, setHideItem ] = useState(false);
  return (
    <div css={mobileheader_container}>
      <div css={mobileheader_hamburger(hideItem)} onClick={onclick}>
        <Image src={icons.hamburger} alt="hamburger" />
      </div>
      <div css={mobileheader_kohler(hideItem)}>
        {" "}
        <Image
          src="https://www.kohler.com.vn/binaries/content/gallery/kohler/home/kohler-logo-261x146.png"
          alt="img"
          width="100"
          height="55"
        />
      </div>
      <div css={mobileheader_search(hideItem)}>
        <Search handleClickEvent={setHideItem} hideItem={hideItem}/>
      </div>
    </div>
  );
}
