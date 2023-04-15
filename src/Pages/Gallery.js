import Tab from '../components/Tab'
import React from 'react'

const Gallery = () => {
  return (
    <div className='pt-24 lg:mx-0 mx-4  '>
      <h1 className="text-6xl text-center font-bold text-transparent  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide bg-clip-text bg-gradient-to-r from-amber-700 to-blue-600 inline-block">Galleria</h1>
      <div  className='mt-8'>
        <Tab />
      </div>
    </div>
  )
}

export default Gallery