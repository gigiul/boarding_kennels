import React from 'react'
import { Card, Accordation } from '../components/'
import { Wrapper } from '../hoc'
import { cards, services } from '../constants'

const Servizi = () => {

    return (
        <div className='lg:mx-0 mx-4 text-center'>
            <h1 className="text-6xl text-center font-bold text-transparent  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide bg-clip-text bg-gradient-to-r from-amber-700 to-blue-600 inline-block">Servizi</h1>

            <div className='mb-16 mt-8'>
                <Accordation />
            </div>
            <div className='flex lg:flex-row flex-col lg:items-start justify-center gap-16 mt-8 '>
                {
                    cards.map((card, index) => {
                        return (
                            <Card key={index} data={card} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Wrapper(Servizi, "services")