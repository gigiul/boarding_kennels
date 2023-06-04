import React from 'react'
import { Wrapper } from '../hoc'
import { RulesCard, RulesDialog } from '../components'
import { rules } from '../constants'

const Rules = () => {
    return (
        <div className='text-center'>
            <h1 className="p-2 text-6xl text-center font-bold text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide bg-clip-text bg-gradient-to-r from-amber-700 to-blue-600 inline-block">
                Regole & Orari
            </h1>
            <div className='flex gap-2 md:flex-row flex-col justify-center items-center '>
                {
                    rules.map((item, i) => {
                        return (
                            <RulesCard key={i} data={item} />
                        )
                    })
                }
            </div>
            <p className='mt-4 text-gray-800 italic'>Per qualsiasi problematica relativa all'orario, se possibile, cercherò di trovare un punto di incontro in modo tale da agevolare al meglio l'organizzazione della vostra giornata.</p>
        </div>
    )
}

export default Wrapper(Rules, "rules")