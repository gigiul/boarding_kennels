import React from 'react'
import { Button } from '@material-tailwind/react'
import { Wrapper } from '../hoc'
import { gallery } from '../constants'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const Gallery = () => {
  return (
    <div className='lg:mx-0 mx-4 text-center  '>
      <h1 className="text-6xl text-center font-bold text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide bg-clip-text bg-gradient-to-b from-green-700 to-green-400 inline-block">Momenti felici</h1>
      <div className='mt-8'>
        <ImageGallery items={gallery} autoPlay={true} slideInterval={5000} />
        <div className='mt-8'>
        <Button
          size="lg"
          color="white"
          className=" text-white bg-blue-500 flex justify-center items-center text-center w-48 m-auto hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
          onClick={(e) => {
            e.preventDefault();
            window.location.href='#contact';
            }}
        >
          <a href='#contact'>Prenota</a>
        </Button>
        </div>
      </div>
    </div>
  )
}

export default Wrapper(Gallery, "gallery")