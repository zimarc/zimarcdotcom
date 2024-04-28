// @ts-nocheck
// @jsxImportSource next
// Add 'use client' at the top of the file to mark it as a client module
// @ts-ignore
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Import local images
import image1 from './img/iso_zimarc_01.jpg';
import image2 from './img/iso_zimarc_02.svg';
import image3 from './img/iso_zimarc_03.svg';

// ... (import other local images as needed)

const importedImages = [image1, image2, image3,]; // Add other images here

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = importedImages.map((url, index) => ({
    url,
    index,
  }));

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-screen-xl mx-auto py-16 px-4 relative group'>
      <div className='relative w-full h-80 md:h-96 lg:h-[580px] xl:h-[800px] rounded-2xl overflow-hidden'>
        <div className='w-full h-full'>
          <Image
            src={slides[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            layout='fill'
            objectFit='contain' // Use 'contain' to fit the image without cropping
            transitionDuration='500ms'
          />
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
      <div className='flex top-4 justify-center py-2 space-x-2'>
        {slides.map((slide) => (
          <div
            key={slide.index}
            onClick={() => goToSlide(slide.index)}
            className='cursor-pointer'
          >
            {/* Dot */}
            <div
              className={`w-2 h-1 rounded-full ${
                currentIndex === slide.index ? 'bg-black' : 'bg-slate-300'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
