import { ganarateLink } from '@/utils/ganarateLink';
import { Title } from '@radix-ui/react-dialog'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Catagory() {

    const catagoryData = [
        {
            title: "Laptops",
            img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/na/product-wayfinder/dell-homepage-product-wayfinding-warm-sb-laptops-la7450.png?fmt=png-alpha&wid=480&hei=360"
        },
        {
            title: "Desktops & All-in-One",
            img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-in3030.png?fmt=png-alpha&wid=480&hei=360"
        },
        {
            title: "Monitors",
            img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/na/product-wayfinder/dell-homepage-product-wayfinding-cold-monitors-u4025qw.png?fmt=png-alpha&wid=480&hei=360"
        },
        {
            title: "PC Accessories",
            img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-pc-accessories-wb7022.png?fmt=png-alpha&wid=480&hei=360"
        },
        {
            title: "Ai Solution",
            img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-gen-ai-solutions-getty1537473222.jpg?fmt=png-alpha&wid=480&hei=360"
        },
        {
            title: "Servers",
            img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-warm-b2l-servers-pexe9680.png?fmt=png-alpha&wid=480&hei=360"
        },
        {
            title: "Data Storage",
            img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-enterprise-server-powerstore-480x360.png?fmt=png-alpha&wid=480&hei=360"
        },
        {
            title: "APEX  MultiCloud & aaS",
            img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-apex-multicloud-aas-xs9315-stocksy2607481.jpg?fmt=png-alpha&wid=480&hei=360"
        },
    ]

    // bg - [#0A0E14]
    return (
        <div className=' bg-[#0A0E14] py-10'>
            <div className='w-[80%] m-auto grid grid-cols-2 md:grid-cols-4 gap-3 '>
                {
                    catagoryData.map((catagory) => {
                        console.log(catagory);

                        return <div className='bg-[#AFBAC4] cursor-pointer hover:outline  hover:bg-[#5A5F63]'>
                            <Link to={ganarateLink(catagory?.title)}>
                            <h3 className='bg-black text-white w-auto py-1'>{catagory?.title}</h3>
                            <img src={catagory?.img} alt={catagory?.title} />
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
