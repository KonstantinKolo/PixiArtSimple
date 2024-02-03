import '../App.css'
import { Canvas } from '../../DrawingMenu/Canvas';
import { ColorHolder } from '../../DrawingMenu/ColorHolder';
import { ColorPicker } from '../../DrawingMenu/ColorPicker';
import { Bucket } from '../../DrawingMenu/DrawingItems/Bucket';
import { Eraser } from '../../DrawingMenu/DrawingItems/Eraser';
import { Pipette } from '../../DrawingMenu/DrawingItems/Pipette';
import { Magnify } from '../../DrawingMenu/DrawingItems/Magnify';
import { Demagnify } from '../../DrawingMenu/DrawingItems/Demagnify';
import { RemoveColors } from '../../DrawingMenu/DrawingItems/RemoveColors';
import { takeScreenShot, getPic } from '../../DrawingMenu/utils';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import axios from "axios";
import { setVis } from '../components/Navbar';

export let colorExp;
export let setColorExp;

function DrawingPage() {
  const navigate = useNavigate();

  const [colorState, setColorState] = useState('rgb(0,0,0)');
  colorExp = colorState;
  setColorExp = setColorState;

  const captureScreen = () => {
    takeScreenShot('screen-shot-target', 'MyImage', 'image/jpeg', '#ffffff');
  }
  const switchAccountPage = () => {
    setVis(true);
    navigate('/dashboard')
  }

  // const [data, setData] = useState({
  //   canvas
  // })
  const savePic = async(e) => {
    e.preventDefault();

    getPic('screen-shot-target', 'MyImage', 'image/jpeg', '#ffffff');
    // await axios.post('./updatePic', pic)
  }

  return (
    <>
      <div className='btn-holder'>
        <button className='account-btn'
        onClick={switchAccountPage}
        >Account</button>

        <button className='screenshot-btn'
        onClick={captureScreen}
        >Download</button>

        <button className='save-btn'
        onClick={savePic}
        >Save</button>
      </div>

      <div className='grid-container'>
        <div className='canvas-container'>
          <div className='canvas-wraper'>
            <Canvas />
          </div>
        </div>

        <p></p>

        <div className='left-side'>
          <div className='color-holder'>
            <div className='all-colors'>
              <ColorHolder />
            </div>
            <div className='all-tools'>
              <Pipette />
              <Bucket />
              <Eraser />
              <RemoveColors />
              <Magnify />
              <Demagnify />
            </div>
          </div>
          <div className='color-picker-holder'>
            <ColorPicker />
          </div>
        </div>
      </div>
    </>
  );
}

export default DrawingPage;