import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Location from './components/Header/Nav/Location/Location'
import Save from './components/Header/Nav/Save/Save'
import Swiper from './components/Swiper/Swiper'

function App() {

  const tele = window.Telegram.WebApp;
  
  useEffect(() => {
    tele.ready();

    const urlParams = new URLSearchParams(window.location.search);
    const first_name = urlParams.get('first_name');
    const phone_number = urlParams.get('phone_number');

    if (first_name && phone_number) {
      localStorage.setItem('clientData', JSON.stringify({ first_name, phone_number }));
    }
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Swiper />
                <Card />
              </>
            }
          />
          <Route
            path='/save'
            element={
              <Save />
            }
          />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
