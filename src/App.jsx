import { useEffect, useState } from 'react';
import { Navbar, Home, Servizi, Gallery, Contatti, Footer, News, Login, Dashboard, } from './Pages'
import { useUserContext } from './context/userContext';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useWebSocket from 'react-use-websocket';
import { MessageProvider } from './context/newsContext';


function App() {

  const { loading, error, user } = useUserContext();
  const socketUrl = 'wss://boarding-kennels-backend.onrender.com';

  const [message, setMessage] = useState(null);

  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log('opened'),
/*     shouldReconnect: (closeEvent) => true,
 */  });

  useEffect(() => {
    console.log("lastJsonMessage", lastJsonMessage)
    switch (lastJsonMessage?.type) {
      case "news":
        console.log("Messagio ricevuto", typeof (lastJsonMessage?.payload))
        setMessage(lastJsonMessage?.payload)
        break;
      default:
    }
  }, [lastJsonMessage])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Home />
              <Gallery />
              <MessageProvider value={{ message }}>
                <News />
              </MessageProvider>
              <Servizi />
              <Contatti />
              <Footer />
            </>} />
          <Route path='/login' element={
            <div className='flex flex-col justify-center items-center h-screen'>
              {error && <p className='bg-red-600/80 font-semibold animate-pulse p-2 rounded-md'>Email o Password sbagliate</p>}
              {loading ? <p>Loading...</p> : (user ?
                (<MessageProvider value={{ message }}>
                  <Dashboard />
                </MessageProvider>)
                : <Login />)}
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
