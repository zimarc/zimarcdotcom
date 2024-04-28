// @ts-nocheck
// @jsxImportSource next
// Add 'use client' at the top of the file to mark it as a client module
// @ts-ignore
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Import local images
import image1 from './img/thumb-zimarc.png';
import image2 from './img/thumb-zimarc.svg';

// ... (import other local images as needed)

const importedSlides = [
  { type: 'image', url: image1 },
  { type: 'image', url: image2 },
  { type: 'iframe', url: 'https://sketchfab.com/models/98c6ad3ae6394bb39d027fdcf9688040/embed' },
  // Add other slides (images or iframes) here
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slide = importedSlides[currentIndex];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? importedSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === importedSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-screen-xl mx-auto py-16 px-4 relative group'>
      <div className='relative w-full h-80 md:h-96 lg:h-[580px] xl:h-[800px] rounded-2xl overflow-hidden'>
        <div className='w-full h-full relative'>
          {slide.type === 'image' && (
            <Image
              src={slide.url}
              alt={`Slide ${currentIndex + 1}`}
                           layout='fill'
              objectFit='contain' // Use 'contain' to fit the image without cropping
            />
          )}
          {slide.type === 'iframe' && (
            <iframe
              title='Catenary-web-3d'
              frameBorder='0'
              allowFullScreen
              mozAllowFullScreen='true'
              webkitAllowFullScreen='true'
              allow='autoplay; fullscreen; xr-spatial-tracking'
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src={slide.url}
              className='w-full h-full'
            />
          )}
        </div>
      </div>

      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          onClick={prevSlide}
          className='w-6 h-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' />
        </svg>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          onClick={nextSlide}
          className='w-6 h-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
        </svg>
      </div>
      <div className='flex absolute bottom-4 left-1/2 transform -translate-x-1/2 justify-center py-2 space-x-2'>
        {importedSlides.map((_, index) => (
          <div key={index} onClick={() => goToSlide(index)} className='cursor-pointer'>
            {/* Dot */}
            <div
              className={`w-2 h-1 rounded-full ${
                currentIndex === index ? 'bg-black' : 'bg-slate-300'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
