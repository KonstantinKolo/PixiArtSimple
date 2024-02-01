import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { email, setEmail } from "../src/App";

export let setUserExp;
export const UserContext = createContext({})

export function UserContextProvider({children}){
  const [user, setUser] = useState(null);
  setUserExp = setUser;
  
  useEffect(() => {
    if(!user){
      axios.get('/profile', email).then(({data}) => {
        setUser(data);
      })
    }
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}