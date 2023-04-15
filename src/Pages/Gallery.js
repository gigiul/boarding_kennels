import Tab from '../components/Tab'
import React from 'react'
import { Button } from '@material-tailwind/react'

const Gallery = () => {
  return (
    <div className='pt-24 lg:mx-0 mx-4  '>
      <h1 className="text-6xl text-center font-bold text-transparent  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide bg-clip-text bg-gradient-to-r from-amber-700 to-blue-600 inline-block">Galleria</h1>
      <div  className='mt-8'>
        <Tab />
        <Button
                    size="lg"
                    color="white"
                    className="text-white bg-blue-500 flex justify-center items-center text-center w-48 m-auto hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                    ripple={false}
                    fullWidth={true}
                >
                    Prenota
        </Button>
      </div>
    </div>
  )
}

export default Gallery