import { useContext, useEffect, useRef, useState } from "react"
import { UserContext, setUserExp } from "../../context/userContext"
import {json, useNavigate} from 'react-router-dom'
import axios from "axios";
import { refreshed, setRefreshed } from "../components/Navbar";
import {toast} from 'react-hot-toast'
import '../App.css'
import '../CSS/Dashboard.css'
import { setVis } from "../components/Navbar";
import { email } from "../App";


export default function DashBoard() {
  const navigate = useNavigate();
  const {user} = useContext(UserContext)

  const [canvas, setCanvas] = useState();
  const [pfp, setPfp] = useState();

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  // Get the new name
  const updateName = async() => {
    await sleep(200);
    axios.get('/profile').then(({data}) => {
      setUserExp(data);
    })
  }
  if(refreshed === true){
    updateName();
    setRefreshed(false);
  }

  let initialize = false;
  useEffect(async() => {
    if(!initialize){
      console.log(1);
      setVis(true);
      const {data} = await axios.get('/profile', email)

      const displayPicCollection = () => {

        for(let i = 0; i < data.picCollection.length; i++){
          const canvas = data.picCollection[i];
          const width = canvas.shift();
          const height = canvas.shift();
          
          const divWrapper = document.createElement('div');
          divWrapper.classList.add('div-wrapper')
          //make the p be every 16 blocks
          let sqHelper = 0
    
          console.log(canvas);
  
          for(let i = 0; i < height; i++){
            for(let i=0; i < width; i++){
              canvas[sqHelper] = `rgb(${canvas[sqHelper]})`;
              
              const div = document.createElement('div');
              div.style.backgroundColor = canvas[sqHelper];
              div.classList.add('display-square');
              divWrapper.appendChild(div)
              sqHelper++;
              console.log();
            }
            
            const p = document.createElement('p');
            p.classList.add('display-p')
            p.innerHTML = '&nbsp'
            divWrapper.appendChild(p);
          }
          document.getElementById('wrapper').appendChild(divWrapper);
        }
      }
      const displayProfilePicture = () => {
        const image = data.profilePicture;
        setPfp(image);
      }

      displayPicCollection();
      displayProfilePicture();
      initialize = true;
    }
  }, [])
  
  return (
    <div>
      <h1 className="dash-h1">Dashboard</h1>
      <div className="data-wrapper">
        {!!pfp && (<img src={pfp} className="profile-pic"></img>)}
        {!!user && (<h2 className="dash-name">Welcome {user.name}!</h2>)}
      </div>
      <div id="wrapper"
      style={{height:'100%', width:'100%', position:''}}
      >
        <h2>Painting collection:</h2>
      </div>
    </div>
  )
}
