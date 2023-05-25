import React, { useRef } from 'react'
import { useUserContext } from '../context/userContext';
import { useMessageContext } from '../context/newsContext';
import { FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { DashboardDialog } from '../components/';



const Dashboard = ({ sendJsonMessage }) => {

  const navigate = useNavigate();
  const { logOut, user } = useUserContext();
  const { message } = useMessageContext();

  function handleLogout() {
    logOut();
    return (
      navigate('/')
    )
  }

  function handleDelete(index) {
    sendJsonMessage({ type: "DELETE", payload: index })
  }



  return (
    <div className='max-w-[90%] mx-auto mt-8'>
      <div className='flex lg:flex-row flex-col lg:justify-between items-center'>
        <h2 className='text-3xl font-semibold'>Benvenuto: <span className='font-semibold italic'>{user?.email}</span></h2>
        <div>
          <button className='border-2 bg-blue-500/50 hover:bg-blue-500 rounded-md font-semibold'><DashboardDialog sendJsonMessage={sendJsonMessage} /></button>
          <button className='border-2 bg-red-500/50 hover:bg-red-500 py-2 px-4 rounded-md font-semibold' onClick={() => handleLogout()} >Logout</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {message
          ?.map((item, i) => {
            return (
              <div
                key={i}
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 relative"
              >
                <FaTimes onClick={() => handleDelete(i)} className="hover:text-red-500 text-red-500/50 absolute top-0 right-0 text-2xl" />
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