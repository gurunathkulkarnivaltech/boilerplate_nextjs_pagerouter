"use client";
import React, { useState } from "react";
import {
  mobilesidebar_container,
  mobilesidebar_menu,
  mobilesidebar_menuitem,
  mobilesidebar_gt,
  mobiletopmenu_container,
  mobiletopmenu_item,
  mobilesubmenu_container,
  mobilesubmenu_items,
  mobiletopmenu_image,
  mobilecountrylist_container,
  mobilecountrylist_item,
  mobilecountry_sublist,
  mobilecountry_sublistitem,
  mobilelogo_list,
  mobilelogo_listitem,
} from "./MobileSidebarCss";
import Image from "next/image";
import MobileHeader from "./MobileHeader";
import { icons } from "@/assets/images";
import { DynamicObject } from "@/utils/commonUtils/commonTypes";

type Props = { mobileMenuArray: any; handleClick: any };

export default function MobileSidebar({ mobileMenuArray, handleClick }: Props) {
  const [sidebarDisplay, setSidebarDisplay] = useState(false);

  const onclick = () => {
    setSidebarDisplay(!sidebarDisplay);
  };

  return (
    <>
      <MobileHeader onclick={onclick} />
      {sidebarDisplay ? (
        <div css={mobilesidebar_container}>
          {mobileMenuArray && mobileMenuArray.length ? (
            <>
              {mobileMenuArray.map((item: DynamicObject, index: number) => {
                return (
                  <>
                    <div
                      css={mobilesidebar_menu}
                      onClick={() => handleClick(index)}
                      key={index}
                    >
                      <div css={mobilesidebar_menuitem}>{item.mainMenu}</div>
                      <div css={mobilesidebar_gt}>&gt;</div>
                    </div>
                    {item.isSelected ? (
                      <>
                        {item?.subMenu?.length &&
                          item.subMenu.map(
                            (item: DynamicObject, index: number) => {
                              return (
                                <div css={mobilesubmenu_container} key={index}>
                                  <div css={mobilesubmenu_items}>
                                    {item.heading}
                                  </div>
                                </div>
                              );
                            }
                          )}
                      </>
                    ) : null}
                  </>
                );
              })}
            </>
          ) : null}

          <div css={mobiletopmenu_container}>
            <div css={mobiletopmenu_item}>
              <div css={mobiletopmenu_image}>
                <Image src={icons.locationIcon} alt="location" />
              </div>
              <div>Find a store</div>
            </div>
            <div css={mobiletopmenu_item}>
              <div css={mobiletopmenu_image}>
                <Image src={icons.mailIcon} alt="location" />
              </div>{" "}
              <div></div>Contact Us
            </div>
            <div css={mobiletopmenu_item}>KOHLER COmpany</div>
            <div css={mobiletopmenu_item}>vn</div>
            <div css={mobiletopmenu_item}>en</div>
          </div>

          {/* country list */}
          <div css={mobilecountrylist_container}>
            <div css={mobilecountrylist_item}>
              <div>North America</div>
              <div>&gt;</div>
            </div>
            <div css={mobilecountrylist_item}>
              <div>North America</div>
              <div>&gt;</div>
            </div>
            <div css={mobilecountrylist_item}>
              <div>North America</div>
              <div>&gt;</div>
            </div>
            <div css={mobilecountrylist_item}>
              <div>North America</div>
              <div>&gt;</div>
            </div>
          </div>

          {/* country cities list */}
          <div css={mobilecountry_sublist}>
            <div css={mobilecountry_sublistitem}>Bahamas</div>
            <div css={mobilecountry_sublistitem}>Bahamas</div>
            <div css={mobilecountry_sublistitem}>Bahamas</div>
            <div css={mobilecountry_sublistitem}>Bahamas</div>
            <div css={mobilecountry_sublistitem}>Bahamas</div>
            <div css={mobilecountry_sublistitem}>Bahamas</div>
          </div>

          {/*  logo list */}
          <div css={mobilelogo_list}>
            <div css={mobilelogo_listitem}>
              <Image
                src="https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/ann_sacks_sized.png"
                alt="logo"
                width="60"
                height="11"
              />
            </div>
            <div css={mobilelogo_listitem}>
              <Image
                src="https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/robern_sized.png"
                alt="logo"
                width="60"
                height="11"
              />
            </div>
            <div css={mobilelogo_listitem}>
              <Image
                src="https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/kallista_sized.png"
                alt="logo"
                width="60"
                height="11"
              />
            </div>
            <div css={mobilelogo_listitem}>
              <Image
                src="https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/sterling_sized.png"
                alt="logo"
                width="60"
                height="11"
              />
            </div>
            <div css={mobilelogo_listitem}>
              <Image
                src="https://www.kohler.com.vn/binaries/content/gallery/kohler/menu/branding-logo/kohler-generators_sized.png"
                alt="logo"
                width="60"
                height="11"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
