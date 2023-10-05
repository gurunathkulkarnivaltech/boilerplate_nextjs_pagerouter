import React, { useEffect, useState } from "react";
import {
  imgCss,
  menuContainer,
  menuItemCss,
  menuItemContainer,
  submenuContainer,
  searchItemCss,
} from "./AppHeaderCss";
import Image from "next/image";
import { DynamicObject } from "@/utils/commonUtils/commonTypes";
import AppHeaderSubmenu from "./AppHeaderSubmenu";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import Search from "../SearchBox/SearchBox";
type Props = {};

export default function AppHeader({}: Props) {
  const [menuArray, setMenuArray] = useState([]);
  const [mobileMenuArray, setMobileMenuArray] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState<any>({});
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (window && window.innerWidth) {
      console.log("coming ",window.innerHeight, window.innerWidth);
      setWindowWidth(window.innerWidth);
    }
      window.addEventListener("resize", () => {
        console.log("coming ",window.innerHeight, window.innerWidth);
        setWindowWidth(window.innerWidth);
      });

      window.addEventListener("scroll", () => {
        console.log("Coming scroll");
      });
  }, []);

  useEffect(() => {
    const menuOptions: any = [];
    const menuMobileOptions: any = [];
    menu.forEach((item: DynamicObject, i) => {
      item.isSelected = false;
      if (i === 3) {
        menuOptions.push({ mainMenu: "Image" });
        menuOptions.push(item);
      } else {
        menuOptions.push(item);
      }
    });
    menu.forEach((item: DynamicObject, i) => {
      item.isSelected = false;
      menuMobileOptions.push(item);
    });
    setMenuArray(menuOptions);
    setMobileMenuArray(menuMobileOptions);
  }, []);

  const handleClick = (index: number) => {
    const menus = [...menuArray];
    menus.forEach((item: DynamicObject, i: number) => {
      if (i === index) {
        item.isSelected = !item.isSelected;
      }
    });
 
    const menuSelected = {
      index,
      data: menus[index],
    };
    setSelectedMenu(menuSelected);
    setMenuArray(menus);
  };

  const handleClickMobile = (index: number) => {
    const menusMobile = [...mobileMenuArray];
    menusMobile.forEach((item: DynamicObject, i) => {
      if (i === index) {
        item.isSelected = !item.isSelected;
      }
    });

    setMobileMenuArray(menusMobile);
  }

  return (
    <>
      {windowWidth && windowWidth <= 980 ? (
        <MobileSidebar mobileMenuArray={mobileMenuArray} handleClick={handleClickMobile}/>
      ) : (
        <>
          <GlobalHeader />
          <div css={menuContainer(windowWidth)}>
            <div css={menuItemContainer}>
              {menuArray.length
                ? menuArray.map((item: DynamicObject, index: number) => {
                    return (
                      <>
                        {item.mainMenu === "Image" ? (
                          <div>
                            <Image
                              src="https://www.kohler.com.vn/binaries/content/gallery/kohler/home/kohler-logo-261x146.png"
                              alt="img"
                              width="200"
                              height="100"
                            />
                          </div>
                        ) : (
                          <div
                            onClick={() => handleClick(index)}
                            css={menuItemCss}
                          >
                            {item.mainMenu}
                          </div>
                        )}
                      </>
                    );
                  })
                : null}
                <Search />
            </div>
          </div>
          {selectedMenu?.data?.isSelected ? (
            <div css={submenuContainer}>
              <AppHeaderSubmenu data={selectedMenu?.data} />
            </div>
          ) : null}
        </>
      )}
    </>
  );
}

const menu = [
  {
    mainMenu: "BATHROOM",
    subMenu: [
      {
        heading: "top 6 bathroom",
        menu: ["aaa", "sddd", "ffff"],
      },
      {
        heading: "top 7 bathroom",
        menu: ["aaa", "sddd", "ffff"],
      },
    ],
  },
  {
    mainMenu: "KITCHEN",
    subMenu: [
      {
        heading: "",
        menu: [],
      },
    ],
  },
  {
    mainMenu: "IDEAS",
    subMenu: [
      {
        heading: "",
        menu: [],
      },
    ],
  },
  {
    mainMenu: "DESIGN",
    subMenu: [
      {
        heading: "",
        menu: [],
      },
    ],
  },
  {
    mainMenu: "NEWS",
    subMenu: [
      {
        heading: "",
        menu: [],
      },
    ],
  },
];
