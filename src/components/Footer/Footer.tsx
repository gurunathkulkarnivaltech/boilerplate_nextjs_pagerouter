'use client';
import React, { useEffect, useState } from 'react'
import MobileFooter from './MobileFooter/MobileFooter';
import DesktopFooter from './DesktopFooter/DesktopFooter';
import { DynamicObject } from '@/utils/commonUtils/commonTypes';

type Props = {
  footerMenu: any
}

export default function Footer({footerMenu}: Props) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [ menuData, setMenuData ] = useState<any>();

  useEffect(() => {
    if (window && window.innerWidth) {
      console.log("coming ",window.innerHeight, window.innerWidth);
      setWindowWidth(window.innerWidth);
    }
      window.addEventListener("resize", () => {
        console.log("coming ",window.innerHeight, window.innerWidth);
        setWindowWidth(window.innerWidth);
      });
  }, []);

  useEffect(() => {
    const footerData = [...footerMenu]
    footerData.map((item: DynamicObject) => {
      item.isSelected = false;
    })
    setMenuData(footerData);
  }, [footerMenu])


  const handleClick = (index: number) => {
    const menus = [...menuData];
    menus.forEach((item: DynamicObject, i: number) => {
      if ( i === index) {
        item.isSelected = !item.isSelected;
      }
    });

    setMenuData(menus);
  }

  return (
    <div>
        {windowWidth <= 980 ? (
          <MobileFooter data={menuData} handleClick={handleClick}/>
        ) : (
          <DesktopFooter data={menuData} />
        )}
    </div>
  )
}


const FooterData = [
  {
    "title": "KOHLER CO.",
    menus: [
      {
        title: "About us",
        link: ""
      },
      {
        title: "Kohler Experience Centers",
        link: ""
      },
      {
        title: "Stewardship",
        link: ""
      },
      {
        title: "Where to Buy",
        link: ""
      },
      {
        title: "Careers",
        link: ""
      },
      {
        title: "Press Room",
        link: ""
      },
      {
        title: "Believe in Better",
        link: ""
      }, {
        title: "Legal",
        link: ""
      },
      {
        title: "Privacy Statement",
        link: ""
      },
      {
        title: "Ethics",
        link: ""
      },
      {
        title: "Subject Access Request",
        link: ""
      },
      {
        title: "Cookies Settings",
        link: ""
      },
      {
        title: "Site map",
        link: ""
      },

    ]
  },
  {
    "title": "KOHLER CO.",
    menus: [
      {
        title: "About us",
        link: ""
      },
      {
        title: "Kohler Experience Centers",
        link: ""
      },
      {
        title: "Stewardship",
        link: ""
      },
      {
        title: "Where to Buy",
        link: ""
      }
    ]
  },
  {
    "title": "KOHLER CO.",
    menus: [
      {
        title: "About us",
        link: ""
      },
      {
        title: "Kohler Experience Centers",
        link: ""
      },
      {
        title: "Stewardship",
        link: ""
      },
      {
        title: "Where to Buy",
        link: ""
      }
    ]
  },
  {
    "title": "KOHLER CO.",
    menus: [
      {
        title: "About us",
        link: ""
      },
      {
        title: "Kohler Experience Centers",
        link: ""
      },
      {
        title: "Stewardship",
        link: ""
      },
      {
        title: "Where to Buy",
        link: ""
      }
    ]
  }
]