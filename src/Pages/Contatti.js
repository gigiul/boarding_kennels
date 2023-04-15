import React from 'react'
import Form from '../components/Form'

const Contatti = () => {
    return (
        <div className='pt-24'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="mb-12 text-6xl text-center font-bold text-transparent  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide bg-clip-text bg-gradient-to-r from-amber-700 to-blue-600 inline-block">Contatti</h1>
                <Form />
            </div>
        </div>
    )
}

export default Contatti