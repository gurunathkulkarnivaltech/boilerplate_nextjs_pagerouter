"use client";
import React, { useEffect, useState } from "react";
import { containerSearchBox, formCss, searchItemCss } from "./SearchCss";
import { icons } from "@/assets/images";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  handleClickEvent?: any;
  hideItem?: boolean;
};

export default function Search({ handleClickEvent, hideItem }: Props) {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    setSearchClicked(!searchClicked);
    handleClickEvent(!hideItem);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      console.log("coming ", window.innerHeight, window.innerWidth);
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchText !==  "") {
      router.push(`/search?query=${searchText}`);
    }
    
  }

  const searchBox = () => {
    return (
      <div css={containerSearchBox}>
        <div css={formCss(hideItem)}>
          <input
            type="search"
            placeholder="Search..."
            onChange={handleSearchChange}
          />
          <button type="submit" onClick={handleSearchSubmit}>
            Search
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {windowWidth <= 980 ? (
        <div>
          {searchClicked ? (
            <>{searchBox()}</>
          ) : (
            <div onClick={handleSearchClick}>
              <Image src={icons.searchIcon} alt=" hello" />
            </div>
          )}
        </div>
      ) : (
        <>{searchBox()}</>
      )}
    </>
  );
}
