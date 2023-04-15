import React from 'react'

const Home = () => {
    return (
        <div>
            <div style={{ backgroundImage: "url(" + "home_dog.webp" + ")" }} className='flex m-auto justify-center h-screen bg-cover bg-center opacity-60 shadow-2xl	  '>
                <div className='flex flex-col justify-center items-center p-4 mb-32'>
                    <h1 className='text-6xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Rock & Dog</h1>
                    <h2 className='text-2xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] italic'>Dai al tuo cane la vacanza che merita</h2>
                </div>
            </div>
        </div>
    )
}

export default Home