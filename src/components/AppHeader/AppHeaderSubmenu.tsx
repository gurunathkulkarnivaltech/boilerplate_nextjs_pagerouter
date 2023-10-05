import { DynamicObject } from '@/utils/commonUtils/commonTypes'
import React from 'react'
import { headersubmenu_container,headersubmenu_titlediv,headersubmenu_title,headersubmenu_list_container,headersubmenu_list_menu,headersubmenu_list_title,headersubmenu_list_main } from './AppHeaderCss'

type Props = {
    data: DynamicObject
}

export default function AppHeaderSubmenu({data}: Props) {
  return (
    <div css={headersubmenu_container}>
        <div css={headersubmenu_titlediv}>
            <div css={headersubmenu_title}>{data.mainMenu}</div>
        </div>
        <div css={headersubmenu_list_main}>
        <div css={headersubmenu_list_container}>
            <div css={headersubmenu_list_title}>Top 6 Bathrrom</div>
            <div css={headersubmenu_list_menu}>Lavatory Faucet</div>
            <div css={headersubmenu_list_menu}>Lavatory Faucet</div>
            <div css={headersubmenu_list_menu}>Lavatory Faucet</div>

        </div>
        <div css={headersubmenu_list_container}>
            <div css={headersubmenu_list_title}>Top 6 Bathrrom</div>
            <div css={headersubmenu_list_menu}>Lavatory Faucet</div>
        </div>
        <div css={headersubmenu_list_container}>
            <div css={headersubmenu_list_title}>Top 6 Bathrrom</div>
            <div css={headersubmenu_list_menu}>Lavatory Faucet</div>
            <div css={headersubmenu_list_menu}>Lavatory Faucet</div>
        </div>
        <div css={headersubmenu_list_container}>
            <div css={headersubmenu_list_title}>Top 6 Bathrrom</div>
            <div css={headersubmenu_list_menu}>Lavatory Faucet</div>
            <div css={headersubmenu_list_menu}>Lavatory Faucet</div>
            <div css={headersubmenu_list_menu}>Lavatory Faucet</div>
            <div css={headersubmenu_list_menu}>Lavatory Faucet</div>
        </div>
        </div>
    </div>
  )
}