import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams, Link } from 'react-router-dom';
import { Wrapper } from '../hoc/'


const News = () => {

    const { id } = useParams();
    console.log("🚀 ~ file: News.jsx:9 ~ News ~ id:", id)

    const { loading, error, events } = useFetch(`https://boarding-kennels-api.onrender.com/api/events`);
    if (loading) return <p> Loading... </p>;
    if (error) return <p> Error :( </p>;
    console.log("events", events)
    return (
        <div className='text-center'>
            <h1 className="text-6xl text-center font-bold text-transparent  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide bg-clip-text bg-gradient-to-r from-amber-700 to-blue-600 inline-block">News</h1>
            <div className='flex flex-wrap gap-4 justify-center mt-8'>
                {
                    events.slice(0)
                    .reverse().map((item, i) => {
                        console.log(item.attributes)
                        return (
                            <div key={i} className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
                                <p className='italic text-gray-700'>{item.attributes.Datetime}</p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.attributes.Name}</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{item.attributes.Description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Wrapper(News, 'news')