import React from 'react'
import Image from "next/image";
import {
    submenuCss,
    listContainer,
    regionCss,
    countryCss,
    submenufooterCss,
    footerimgCss,
    submenuContainer,
    submenuCollapse
  } from "./GlobalHeaderCss";
import { DynamicObject } from '@/utils/commonUtils/commonTypes';
type Props = {
    imageData: any;
    data: any;
    isDropDown: boolean
}

export const GlobalSubMenu = ({imageData, data, isDropDown} : Props) => {
  return (
    <div css={isDropDown ? submenuContainer : submenuCollapse}>
    <div css={submenuCss}>
      {data.map((item: DynamicObject, index: any) => {
        return (
          <div css={listContainer} key={index}>
            <div css={countryCss}>{item.country}</div>
            {item.regions.map((element: any, i: any) => {
              return (
                <div css={regionCss} key={i}>
                  {element}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
   
      <div css={submenufooterCss}>
        {imageData.map((item: any, index: number) => {
          return (
            <div key={index} css={footerimgCss}>
              <Image src={item} alt="img" width="53" height="14" key={index} />
            </div>
          );
        })}
      </div>

  </div>
  )
}