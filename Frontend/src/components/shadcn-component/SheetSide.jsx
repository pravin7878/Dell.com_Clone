"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar"
import { MdPermIdentity } from "react-icons/md"
import { LoginBtn } from "../my-components/login/LoginBtn"
import { LoginCont } from "../my-components/login/LoginCont"



export function SheetSide({ btn, side,cont }) {
    return (
        <div className="lg:hidden grid grid-cols-2 gap-2">
            <Sheet className="lg:hidden">
                <SheetTrigger asChild className="p-0 m-0 gap-0">
                    {btn}
                </SheetTrigger>
                <SheetContent side={side} className="top-[60px] overflow-auto scroll-smooth">
                    {cont}
                </SheetContent>
            </Sheet>
        </div>
    )
}
