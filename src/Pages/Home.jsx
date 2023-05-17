import React from 'react'

const Home = () => {
    return (
        <div id='home'>
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/home_dog.webp)`,
            }} className='flex m-auto justify-center h-screen bg-cover bg-center opacity-60 shadow-2xl	  '>
                <div className='flex flex-col gap-4 justify-center items-center text-center p-4 mb-32'>
                    <h2 className='text-3xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] italic'>Asilo e pensione per cani</h2>
                    <h1 className='text-6xl tracking-wider text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>LA CASETTA NEL VERDE</h1>
                    <h2 className='text-3xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] italic'>da Beatrice</h2>
                </div>
            </div>
        </div>
    )
}

export default Home