import { useEffect, useState } from 'react';
import { Navbar, Home, Servizi, Gallery, Contatti, Footer, News, Login, Dashboard, Rules, About, } from './Pages'
import { Alert, Whatsapp } from './components'
import { useUserContext } from './context/userContext';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useWebSocket from 'react-use-websocket';
import { MessageProvider } from './context/newsContext';


function App() {

  const { loading, error, user } = useUserContext();
  const socketUrl = process.env.REACT_APP_WS_URL;

  const [message, setMessage] = useState(null);

  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log('opened'),
/*     shouldReconnect: (closeEvent) => true,
 */  });

  useEffect(() => {
    switch (lastJsonMessage?.type) {
      case "news":
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
              <Alert />
              <Whatsapp />
              <Home />
              <About />
              <Gallery />
{/*           <MessageProvider value={{ message }}>
                <News />
              </MessageProvider> */}
              <Servizi />
              <Rules />
              <Contatti />
              <Footer />
            </>} />
{/*           <Route path='/login' element={
            <div className=''>
              <div>
                
              </div>
              {error && <p className='bg-red-600/80 font-semibold animate-pulse p-2 rounded-md'>Email o Password sbagliate</p>}
              {loading ? <p>Loading...</p> : (user ?
                (<MessageProvider value={{ message }}>
                  <Dashboard sendJsonMessage={sendJsonMessage} />
                </MessageProvider>)
                : <Login />)}
            </div>
          } /> */}
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
