import React from 'react'

import {
    Menubar,
    MenubarContent,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

// import services

import { hendelClick, hendelSearch, hendelSingIn, hendelSingUp } from "../../../services/service.jsx"
import { LoginCont } from './LoginCont.jsx'


export const LoginBtn = ({ btn }) => {
    return (
        <span>
            <Menubar >
                <MenubarMenu>
                    <MenubarTrigger className="text-black text-sm font-normal hover:underline hover:cursor-pointer">{btn}<span></span></MenubarTrigger>
                    <MenubarContent className="p-5 m-auto flex flex-col w-[60%]">
                        <LoginCont hendelSingIn={hendelSingIn} hendelSingUp={hendelSingUp}/>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </span>
    )
}
