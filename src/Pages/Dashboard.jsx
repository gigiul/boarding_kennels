import React from 'react'
import { useUserContext } from '../context/userContext';
import { useMessageContext } from '../context/newsContext';
import { FaTimes } from "react-icons/fa";
import { Navigate } from 'react-router-dom';



const Dashboard = () => {

  const { logOut, user } = useUserContext();
  console.log("🚀 ~ file: Dashboard.jsx:11 ~ Dashboard ~ user:", user)
  const { message } = useMessageContext();

function handleLogout() {
  logOut();

}


  return (
    <div className='max-w-7xl items-center'>
      <div className='flex justify-between'>
      <h2 className='text-3xl font-semibold'>Benvenuto: <span className='font-semibold italic'>{user.email}</span></h2>
      <button className='border-2 bg-red-500/50 hover:bg-red-500 py-2 px-4 rounded-md font-semibold' onClick={handleLogout} >Logout</button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {message
          ?.slice(0)
          .reverse()
          .map((item, i) => {
            console.log(item);
            return (
              <div
                key={i}
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 relative"
              >
                   <FaTimes className="hover:text-red-500 text-red-500/50 absolute top-0 right-0 text-2xl" />
                <p className="italic text-gray-700">{item?.date}</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item?.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{item?.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default Dashboard