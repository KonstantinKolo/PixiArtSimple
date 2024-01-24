import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const registerUser = async (e) => {
    e.preventDefault();
    const {name, email, password} = data
    try{
      const {data} = await axios.post('/register', {
        name, email, password
      })
      if(data.error){
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login successful. Welcome!')
        navigate('/login')
      }
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="register">
      <h1 style={{marginTop:'0', marginBottom:'70px'}}>REGISTER</h1>

      <form onSubmit={registerUser}>
        <input className='input' type='text' placeholder='enter name ...' value={data.name} onChange={(e) => setData({...data, name:e.target.value})}/>
        <p className="reg-pars"></p>
        <input className='input' type='email' placeholder='enter email ...' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
        <p className="reg-pars"></p>
        <input className="input" type='password' placeholder='enter password ...' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
        <p className="reg-pars"></p>
        <button className='submit-btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}
