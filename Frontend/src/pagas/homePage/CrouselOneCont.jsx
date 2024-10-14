import { useEffect, useState } from 'react';
import {crouselOneItem} from "@/utils/homeContent"

export const CrouselOneCont = () => {
    const imagas = crouselOneItem; 
    const [currentIndex, setcurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const hendelPrev = () => {
        setIsFading(true);
        setTimeout(() => {
            if (currentIndex === 0) {
                setcurrentIndex(imagas.length - 1);
            } else {
                setcurrentIndex((prev) => prev - 1);
            }
            setIsFading(false);
        }, 500);
    };

    const hendelNext = () => {
        setIsFading(true);
        setTimeout(() => {
            if (currentIndex === imagas.length - 1) {
                setcurrentIndex(0);
            } else {
                setcurrentIndex((prev) => prev + 1);
            }
            setIsFading(false);
        }, 500); 
    };

    const hendelAutoSlide = () => {
        setIsFading(true);
        setTimeout(() => {
            setcurrentIndex((prev) =>
                prev === imagas.length - 1 ? 0 : prev + 1
            );
            setIsFading(false);
        }, 500);
    };

    useEffect(() => {
        const id = setInterval(hendelAutoSlide, 3000); 

        return () => clearInterval(id); 
    }, [currentIndex]);

    return (
        <div className='relative flex justify-center items-center w-full overflow-hidden bg-gray-900  shadow-lg'>
            <button
                onClick={hendelPrev}
                className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-black rounded-full p-2 focus:outline-none transition duration-300 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <img
                className={`h-full w-full object-cover transition-opacity duration-300 ease-in ${isFading ? 'opacity-50' : 'opacity-80'}`}
                src={imagas[currentIndex]}
                alt={`Image ${currentIndex}`}
            />

            <button
                onClick={hendelNext}
                className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-black rounded-full p-2 focus:outline-none transition duration-300 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {imagas.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'} transition duration-200`}
                    />
                ))}
            </div>
        </div>
    );
};