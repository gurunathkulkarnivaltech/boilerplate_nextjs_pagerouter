import { DynamicObject } from "@/utils/commonUtils/commonTypes";
import React from "react";
import {
  headersubmenu_container,
  headersubmenu_titlediv,
  headersubmenu_title,
  headersubmenu_list_container,
  headersubmenu_list_menu,
  headersubmenu_list_title,
  headersubmenu_list_main,
} from "./AppHeaderCss";

type Props = {
  data: DynamicObject;
};

export default function AppHeaderSubmenu({ data }: Props) {
  return (
    <div css={headersubmenu_container}>
      <div css={headersubmenu_titlediv}>
        <div css={headersubmenu_title}>{data.title}</div>
      </div>
      <div css={headersubmenu_list_main}>
        {data.menu_items.map((item: any, i: number) => {
          return (
            <div css={headersubmenu_list_container} key={i}>
              <div css={headersubmenu_list_title}>{item.value.menu_item_title}</div>
              {item.value.sub_menu.map((element: any, index:number)=> {
                return (
                    <div css={headersubmenu_list_menu} key={index}>{element.value.sub_menu_item_title}</div>
                )
              })}
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
