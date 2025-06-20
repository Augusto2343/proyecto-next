'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
const Carousel = ({imgArray}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % imgArray.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (id) => {
        setCurrentSlide(id);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % imgArray.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + imgArray.length) % imgArray.length);
    };

    return (
        isClient? 
        <div className={`relative w-full z-700 `} data-carousel="slide">
        
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {imgArray.map((item,index) => (
                        <div key={index} className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} data-carousel-item>
                            
                            <img
                                src={item.img}
                                className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt={item.text}
                            />
                            <div className="absolute bottom-5 left-0 right-0 max-w-150 bg-transparent text-white p-4">
                                <p className="text-md font-light">{item.text}</p>
                            </div>
                        
                    </div>
                    ))
                    }
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
       
                    {imgArray.map((item,index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${
                               index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                            aria-current={index === currentSlide ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                
        </div>
        <button onClick={prevSlide} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button onClick={nextSlide} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
    :
    <>
    
    </>
    );
};

export default Carousel;
