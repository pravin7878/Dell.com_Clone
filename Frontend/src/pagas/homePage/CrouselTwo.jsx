import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export const CrouselTwo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 4; 

    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSlides - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="relative w-screen h-[550px] py-10 overflow-hidden  bg-[#0A0E14]">
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                <div className="w-full  flex-shrink-0">
                    <main className='w-[85%] m-auto h-full flex justify-end relative'>
                        <div className='absolute top-[35%] left-10 bg-white p-5'>
                            <p>VOSTRO LAPTOPS</p>
                            <h3>Any Task. Any Place</h3>
                            <p>A new take on the anywhere office</p>

                            <span className='flex gap-3'>
                                <button className='flex items-center gap-2 text-gray-600 hover:text-black' >Shop All <span><FaArrowRight /></span></button>
                               
                                <button className='flex items-center gap-2 text-gray-600 hover:text-black' >Learn More <span><FaArrowRight /></span></button>
                            </span>
                        </div>
                        <div className='w-[80%]'>
                            <img className='w-full h-full' src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/promo-carousel/show-sb-dell-vostro-5640nt-uhp-2503-06-in-promo-c-lf-1610x906.jpg?wid=1610&hei=906" alt="" />
                        </div>
                    </main>
                </div>
              
                <div className="w-full  flex-shrink-0">
                    <main className='w-[85%] m-auto h-full flex justify-end relative'>
                        <div className='absolute top-[35%] left-10 bg-white p-5'>
                            <p>XPS LAPTOPS</p>
                            <h3>Desined to Ipress</h3>
                            <p>Powerfull Laptops for your Home or office</p>

                            <span className='flex gap-3'>
                                <button className='flex items-center gap-2 text-gray-600 hover:text-black' >Learn More <span><FaArrowRight /></span></button>
                            </span>
                        </div>

                        <div className='w-[80%]'>
                            <img className='w-full h-full' src="https://i.dell.com/is/image/DellContent/content/dam/documents-and-videos/dv2/b2b/en/product-launch/monitors/1-monitor-brand/site-banners/cs2401g0057-704478-gl-cs-co-site-banner-u4025qw-1610x906.jpg?wid=1610&hei=906" alt="" />
                        </div>
                    </main>
                </div>

                <div className="w-full  flex-shrink-0">
                    <main className='w-[85%] m-auto h-full flex justify-end relative'>
                        <div className='absolute top-[35%] left-10 bg-white p-5'>
                            <p>XPS LAPTOPS</p>
                            <h3>Desined to Ipress</h3>
                            <p>Powerfull Laptops for your Home or office</p>

                            <span className='flex gap-3'>
                                <button className='flex items-center gap-2 text-gray-600 hover:text-black' >Learn More <span><FaArrowRight /></span></button>
                            </span>
                        </div>

                        <div className='w-[80%]'>
                            <img className='w-full h-full' src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/promo-carousel/show-sb-dell-xps-9440t-uhp-2503-06-in-promo-c-lf-1610x906.jpg?wid=1610&hei=906" alt="" />
                        </div>
                    </main>
                </div>

                <div className="w-full  flex-shrink-0">
                    <main className='w-[85%] m-auto h-full flex justify-end relative'>
                        <div className='absolute top-[35%] left-10 bg-white p-5'>
                            <p>XPS LAPTOPS</p>
                            <h3>Desined to Ipress</h3>
                            <p>Powerfull Laptops for your Home or office</p>

                            <span className='flex gap-3'>
                                <button className='flex items-center gap-2 text-gray-600 hover:text-black' >Learn More <span><FaArrowRight /></span></button>
                            </span>
                        </div>

                        <div className='w-[80%]'>
                            <img className='w-full h-full' src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/promo-carousel/show-sb-dell-poweredge-r750xs-uhp-2501-03-in-promo-carousel-lf-1610x906.jpg?wid=1610&hei=906" alt="" />
                        </div>
                    </main>
                </div>
            </div>

            <button
                className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white text-black p-2"
                onClick={handlePrev}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg> 
            </button>

            <button
                className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white text-black p-2"
                onClick={handleNext}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};
