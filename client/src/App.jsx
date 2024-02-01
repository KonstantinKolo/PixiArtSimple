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
import { useState } from 'react'

axios.defaults.baseURL = 'https://pixi-art-simple.onrender.com';
axios.defaults.withCredentials = true;

export let email;
export let setEmail

function App() {
  const[em, setEm] = useState();
  email = em;
  setEmail = setEm;

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
    </UserContextProvider>
  )
}

export default App
