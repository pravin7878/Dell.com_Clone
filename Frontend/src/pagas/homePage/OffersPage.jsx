import React from 'react'
import { FaArrowRight } from "react-icons/fa";


export const OffersPage = () => {
    return (
        <article className='bg-[#1D2C3B] py-10'>
            <main className='w-[80%] m-auto text-white'>
                <h3 className='font-bold text-xl'>For You</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-5'>
                    <div className='bg-[#33414E] flex flex-col justify-between items-start p-3'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-bold text-xl'>Best Seller</h2>
                            <span className='flex gap-2 items-center'>
                                <img width={"50%"} src="https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/lattitue.png" alt="Best Seller" />
                                <p>Enjoy special prices on our best selling laptops.</p>
                            </span>
                        </div>
                        <button className='flex items-center gap-2 text-gray-300 hover:text-white' >Shop now <span><FaArrowRight /></span></button>
                    </div>

                    <div className='bg-[#33414E] flex flex-col justify-between items-start p-3'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-bold text-xl'>Build Your Own Device</h2>
                            <span className='flex gap-2 items-center'>
                                <p>Order a system that will be built to your personal specifications.</p>
                            </span>
                        </div>
                        <button className='flex items-center gap-2 text-gray-300 hover:text-white'>Shop now <span><FaArrowRight /></span></button>
                    </div>

                    <div className='bg-[#33414E] flex flex-col justify-between items-start p-3'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-bold text-xl'>Access My Account</h2>
                            <span className='flex gap-2 items-center'>
                                <p>Enjoy special prices on our best selling laptops.</p>
                            </span>
                        </div>
                        <button className='flex items-center gap-2 text-gray-300 hover:text-white'>Sing In<span><FaArrowRight/></span></button>
                    </div>
                </div>
            </main>
        </article>
    )
}
