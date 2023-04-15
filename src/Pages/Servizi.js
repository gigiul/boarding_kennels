import React from 'react'
import Card from '../components/Card.js'

const Servizi = () => {

    let cards = [
        {
            title: "Standard",
            price: {
                value: 20,
                time: "gg"
            },
            services: {
                1: "Alloggio privato",
                2: "Colazione, pranzo e cena",
                3: "Giorni di permanenza illimitati",
                4: "Pulizia giornaliera",
                5: "Spazio esterno per il relax",
            }
        },
        {
            title: "Premium",
            price: {
                value: 40,
                time: "gg"
            },
            services: {
                1: "Alloggio privato",
                2: "Colazione, pranzo e cena",
                3: "Giorni di permanenza illimitati",
                4: "Pulizia giornaliera",
                5: "Spazio esterno per il relax",
                6: "Passeggiate individuali",
                7: "Personal Care",
                8: "Pasti personalizzati",
            }
        },
        {
            title: "Deluxe",
            price: {
                value: "personalizzato"
            },
            services: {
                1: "Tutti i servizi del Premium",
                2: "Richieste personalizzate",
            }
        }
    ]

  return (
        <div className='pt-24 lg:mx-0 mx-4  '>
            <h1 className="text-6xl text-center font-bold text-transparent  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide bg-clip-text bg-gradient-to-r from-amber-700 to-blue-600 inline-block">Servizi</h1>
            
            <div className='flex lg:flex-row flex-col lg:items-start justify-center gap-16 mt-8 '>
                {
                    cards.map((card, index) => {
                        return (
                            <Card key={index} data={card}/>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default Servizi