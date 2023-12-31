import './App.css';
import { Canvas } from './DrawingMenu/Canvas.jsx';
import { ColorHolder } from './DrawingMenu/ColorHolder.jsx';
import { ColorPicker } from './DrawingMenu/ColorPicker.jsx';
import { Bucket } from './DrawingMenu/DrawingItems/Bucket.jsx';
import { Eraser } from './DrawingMenu/DrawingItems/Eraser.jsx';
import { Pipette } from './DrawingMenu/DrawingItems/Pipette.jsx';
import { useState } from 'react';
import { RemoveColors } from './DrawingMenu/DrawingItems/RemoveColors.jsx';
import { Magnify } from './DrawingMenu/DrawingItems/Magnify.jsx'
import { Demagnify } from './DrawingMenu/DrawingItems/Demagnify.jsx';
import { takeScreenShot } from './utils.js';

export let colorExp;
export let setColorExp;

function App() {
  const [colorState, setColorState] = useState('rgb(0,0,0)');
  colorExp = colorState;
  setColorExp = setColorState;

  const captureScreen = () => {
    takeScreenShot('screen-shot-target', 'MyImage', 'image/jpeg', '#ffffff');
  }

  return (
    <>
      <button className='screenshot-btn'
      onClick={captureScreen}
      >Download</button>

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

export default App;
