import React from 'react'
import Form from '../components/Form'
import Wrapper from '../hoc/Wrapper'

const Contatti = () => {
    return (
        <div className='drop-shadow-2xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="mb-12 text-6xl text-center font-bold text-transparent  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide bg-clip-text bg-gradient-to-r from-amber-700 to-blue-600 inline-block">Contatti</h1>
                <div className='flex items-center xl:flex-row flex-col gap-4'>
                    <div className='text-center flex flex-col gap-1 items-center'>
                        <h2 className='text-xl font-semibold text-center'>Via Maddalene 175 (Vicenza - Maddalene vecchie)</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2793.067674473572!2d11.496217615560969!3d45.569077679102264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDM0JzA4LjciTiAxMcKwMjknNTQuMyJF!5e0!3m2!1sen!2sit!4v1684314188003!5m2!1sen!2sit" className='rounded-md md:w-[600px] md:h-[550px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                <Form />
                </div>
            </div>
        </div>
    )
}

export default Wrapper(Contatti, "contact")