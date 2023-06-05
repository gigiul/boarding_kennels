import React from 'react'
import { Wrapper } from '../hoc'
import AboutImage from '../assets/about_image.jpeg'

const About = () => {
    return (
        <div className='text-center'>
            <h1 className="text-6xl text-center font-bold text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide bg-clip-text bg-gradient-to-b from-green-700 to-green-400 inline-block">
                Chi sono
            </h1>
            <h2 className='mt-8 text-2xl italic font-semibold'>Sono te, quando tu non ci puoi essere 🦮🐾</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 mt-8 md:justify-items-end justify-items-center gap-4'>
                <div className='flex md:justify-start xl:items-center items-start'>
                    <div className='flex flex-col text-center items-center '>
                        <img
                            src={AboutImage}
                            alt="/about_image"
                            className='h-96 rounded-2xl' />
                    </div>
                </div>
                <div className='text-start flex justify-start'>
                    <p className='italic md:text-xl text-sm mt-4 '>
                        <span className='font-semibold'>Ti rattrista lasciare solo il tuo cucciolo mentre sei a lavoro? </span>
                        Vuoi regalargli una giornata di divertimento e socializzazzione con altri cagnolini mentre tu ti rilassi o vai in vacanza?
                        Ecco a voi la soluzione : <br /><span className='font-bold'>Asilo e pensione per cani che vivono in casa !</span>
                        <br />Offrirò ai vostri cagnolini un ambiente innovativo e sicuro, con tante attività diurne e comfort notturno.  Per questioni di spazio e benessere comune <span className='underline'>verranno ospitati principalmente cani di piccola e media taglia</span> mentre i più grandi solo su richiesta.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Wrapper(About, 'about')