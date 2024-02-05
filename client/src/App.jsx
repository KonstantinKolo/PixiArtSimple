import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import DashBoard from './pages/DashBoard'
import DrawingPage from './pages/DrawingPage'
import CreationMenu from './pages/CreationMenu'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'

axios.defaults.baseURL = 'https://pixi-art-simple.onrender.com';
axios.defaults.withCredentials = true;

export let email;
export let setEmail

function App() {
  const[em, setEm] = useState();
  email = em;
  setEmail = setEm;


  //Check if users screen is not wide enough
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isMobile = width <= 768;

  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/creationmenu' element={<CreationMenu />} />
        <Route path='/drawboard' element={<DrawingPage />} />
      </Routes>
      <Modal
        isOpen={isMobile}
        contentLabel="Loading Modal"
        className="loading-modal"
        overlayClassName="loading-overlay"
        >
        <h2 style={{color:'black'}}>Your screen is not wide enough for the application!</h2>
      </Modal>
    </UserContextProvider>
  )
}

export default App
