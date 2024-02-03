import { Link } from 'react-router-dom'
import { useState } from 'react';

export let refreshed;
export let setRefreshed
export let setVis

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  setVis = setVisible;
  const [refresh,setRefresh] = useState(false);
  refreshed = refresh;
  setRefreshed = setRefresh;

  const removeElement = () => {
    setVisible((prev) => !prev);
    setRefreshed(true);
    console.log('hey');
  };

  return(
    <>
      {visible && 
        <>
          <p className="credits">
            This site was created by
            <a href='https://github.com/KonstantinKolo'> Konstantin
            </a>
            . Check the <a href='https://github.com/KonstantinKolo/PixiArtSimple'>source code</a>.
          </p>
          
          <nav style={{top:'0', position:'absolute', width:'100%'}}>
            <Link style={{fontSize:'30px', fontWeight:'bold'}} to='/register' onClick={() => setRefresh(true)}>Register </Link>
            <a style={{cursor:'default', fontSize:'30px'}}>| </a>
            <Link style={{fontSize:'30px', fontWeight:'bold'}} to='/login' onClick={() => setRefresh(true)}>Login </Link>
            <a style={{cursor:'default', fontSize:'30px'}}>| </a>
            <Link style={{fontSize:'30px', fontWeight:'bold'}} to='/creationmenu' onClick={removeElement}>Start drawing 🎨</Link>
          </nav>
        </>
      }
    </>
  )
}