import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ganarateLink } from "@/utils/ganarateLink";
import menus from "@/utils/menuContent";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export function HoverMenubar() {
    const catagories = useSelector((state) => state?.data?.catagories)

    return (
        <Menubar className="flex flex-col md:flex-row item-center justify-start w-[30%]  md:w-[90%]  gap-0">

            <MenubarMenu className="w-1/8 block text-center align-middle ">
                <MenubarTrigger
                    className="w-full flex justify-center cursor-pointer"
                >
                    Artificial Intelligence
                </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu className="reletive w-1/8 block text-center  align-middle ">
                <MenubarTrigger
                    className="w-full flex justify-center cursor-pointer "
                >
                    IT Infrastructure
                </MenubarTrigger>

                <MenubarContent >
                    <MenubarItem>
                        Dell APEX Multicloud & aaS
                    </MenubarItem>

                    <MenubarSub >
                        <MenubarSubTrigger >
                            Product
                        </MenubarSubTrigger>
                        <MenubarSubContent >
                            <MenubarItem>Server</MenubarItem>
                            <MenubarItem>Data Storage</MenubarItem>
                            <MenubarItem>Data Protection</MenubarItem>
                            <MenubarItem>Hyperconverged Infrastrure</MenubarItem>
                            <MenubarItem>Networking</MenubarItem>
                            <MenubarItem>Infrastructure Scccessories</MenubarItem>
                            <MenubarItem>AIOps & IT Observability</MenubarItem>

                        </MenubarSubContent>
                    </MenubarSub>

                    <MenubarSub >
                        <MenubarSubTrigger >
                            Workloads
                        </MenubarSubTrigger>
                        <MenubarSubContent >
                            <MenubarItem>View All Workloads</MenubarItem>
                            <MenubarItem>Analytics</MenubarItem>
                            <MenubarItem>Cloud Solutions</MenubarItem>
                            <MenubarItem>Data Management</MenubarItem>
                            <MenubarItem>Edge Solutions</MenubarItem>
                            <MenubarItem>Kubernetes & Containers</MenubarItem>
                            <MenubarItem>Security Solutions</MenubarItem>
                            <MenubarItem>Virtual Desktop Infrastructure</MenubarItem>

                        </MenubarSubContent>
                    </MenubarSub>

                    <MenubarSub >
                        <MenubarSubTrigger >
                            Industry
                        </MenubarSubTrigger>
                        <MenubarSubContent >
                            <MenubarItem>View All Industry</MenubarItem>
                            <MenubarItem>Digital Cities</MenubarItem>
                            <MenubarItem>Energy, Climate Action & Sustainability</MenubarItem>
                            <MenubarItem>Financial</MenubarItem>
                            <MenubarItem>Healthcare & Life Sciences</MenubarItem>
                            <MenubarItem>Higher Education</MenubarItem>
                            <MenubarItem>K-12 Education</MenubarItem>
                            <MenubarItem>Retail</MenubarItem>
                            <MenubarItem>Safety & Security</MenubarItem>
                            <MenubarItem>Telecommunications</MenubarItem>
                            <MenubarItem>Utilities</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>

                    <MenubarItem>Payment Solutions</MenubarItem>

                    <MenubarItem>Developers & DevOps</MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu className="w-1/8 block text-center align-middle">
                <MenubarTrigger 
                className="w-full flex justify-center items-center cursor-pointer "
                >Computers & Accessories</MenubarTrigger>
                <MenubarContent>
                    {catagories?.map((catagory, ind) => {
                        if (!catagory.subcatagories) {
                            return <MenubarItem key={ind}>
                                <Link to={ganarateLink(catagory?.title)}>{catagory?.title}</Link>
                            </MenubarItem>
                        }
                        else {
                            return <MenubarSub key={ind}>
                                <MenubarSubTrigger >
                                    <Link to={ganarateLink(catagory?.title)}>{catagory?.title}</Link>
                                    <MenubarSubContent >
                                        {catagory?.subcatagories?.map((subTitle, ind) => {
                                            return <MenubarItem key={ind}>
                                                <Link to={ganarateLink(subTitle)}>{subTitle}</Link>
                                            </MenubarItem>
                                        })}
                                    </MenubarSubContent>
                                </MenubarSubTrigger>
                            </MenubarSub>
                        }

                    })}
                </MenubarContent>
            </MenubarMenu>

            {menus?.map((item, ind) => {
                return <MenubarMenu key={ind} className="w-1/8 block text-center align-middle">
                    <MenubarTrigger 
                    className="w-full flex justify-center cursor-pointer"
                    >
                        {item?.title}
                    </MenubarTrigger>

                    <MenubarContent>
                        {item?.content?.map((subTitle, ind) => {
                            return <MenubarItem key={ind}>{subTitle}</MenubarItem>
                        })}
                    </MenubarContent>
                </MenubarMenu>
            })}

           
        </Menubar>
    )
}
