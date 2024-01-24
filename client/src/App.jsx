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

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true;

function App() {
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
