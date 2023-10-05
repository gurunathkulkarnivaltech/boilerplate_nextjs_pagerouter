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
                  <div css={mobileFooter_menuitem}>{item.title}</div>
                  <div css={mobileFooter_gt}>&gt;</div>
                </div>
                {item.isSelected ? (
                  <>
                    {item?.menus?.length &&
                      item.menus.map((item: DynamicObject, i: number) => {
                        return (
                          <div css={mobilesubmenu_containerFooter} key={i}>
                            <div css={mobilesubmenu_itemsFooter}>{item.title}</div>
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
