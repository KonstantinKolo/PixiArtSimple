import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import '../App.css'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:'',
    password:''
  })

  const loginUser = async (e) => {
    e.preventDefault();
    const {email, password} = data
    try {
      const { data } = await axios.post(
        '/login',
        {
          email,
          password,
      })
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success('Login successful. Welcome!');
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <h1 style={{marginTop:'0', marginBottom:'70px'}}>LOGIN</h1>

      <form onSubmit={loginUser}>
        <input className='input' type='email' placeholder='enter email ...' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
        <p className="reg-pars"></p>
        <input className='input' type='password' placeholder='enter password ...' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
        <p className="reg-pars"></p>
        <button className='submit-btn' type='submit'>Login</button>
      </form>
    </div>
  )
}
