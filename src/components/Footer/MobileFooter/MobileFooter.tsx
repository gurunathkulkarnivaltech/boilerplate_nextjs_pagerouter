"use client";
import { DynamicObject } from "@/utils/commonUtils/commonTypes";
import React from "react";
import { mobileFooter_gt, mobileFooter_menu, mobileFooter_menuitem, mobilesubmenu_containerFooter, mobilesubmenu_itemsFooter } from "./mobileFooterCss";

type Props = {
  data: any;
  handleClick: (index: number) => void;
};

export default function MobileFooter({ data, handleClick }: Props) {
  return (
    <>
      {data?.length &&
        data.map((item: DynamicObject, index: number) => {
          return (
            <>
              <>
                <div
                  css={mobileFooter_menu}
                  onClick={() => handleClick(index)}
                  key={index}
                >
                  <div css={mobileFooter_menuitem}>{item.name}</div>
                  <div css={mobileFooter_gt}>&gt;</div>
                </div>
                {item.isSelected ? (
                  <>
                    {item?.menuItems?.length &&
                      JSON.parse(item.menuItems).map((item: DynamicObject, i: number) => {
                        return (
                          <div css={mobilesubmenu_containerFooter} key={i}>
                            <div css={mobilesubmenu_itemsFooter}>{item.value.name}</div>
                          </div>
                        );
                      })}
                  </>
                ) : null}
              </>
            </>
          );
        })}
    </>
  );
}
