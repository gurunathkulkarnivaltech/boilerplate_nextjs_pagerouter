"use client";
import { DynamicObject } from "@/utils/commonUtils/commonTypes";
import React from "react";
import {
  footerItemCss,
  footerSubmenuCss,
  listContainerFooter,
  itemCssFooter,
} from "./DesktopFooterCss";

type Props = {
  data: any;
};

export default function DesktopFooter({ data }: Props) {
  console.log("Coming", data);
  return (
    <div>
      <div>
        <div css={footerSubmenuCss}>
          {data.map((item: DynamicObject, index: any) => {
            return (
              <div css={listContainerFooter} key={index}>
                <div css={footerItemCss}>{item.title}</div>
                {item.menus.map((element: any, i: any) => {
                  return (
                    <div css={itemCssFooter} key={i}>
                      {element.title}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const FooterData = [];
