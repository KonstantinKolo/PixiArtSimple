import './App.css';
import { Canvas } from './DrawingMenu/Canvas.jsx';
import { ColorHolder } from './DrawingMenu/ColorHolder.jsx';
import { ColorPicker } from './DrawingMenu/ColorPicker.jsx';
import { Bucket } from './DrawingMenu/DrawingItems/Bucket.jsx';
import { Eraser } from './DrawingMenu/DrawingItems/Eraser.jsx';
import { Pipette } from './DrawingMenu/DrawingItems/Pipette.jsx';
import { useState } from 'react';

export let colorExp;
export let setColorExp;

function App() {
  const [colorState, setColorState] = useState('rgb(0,0,0)');
  colorExp = colorState;
  setColorExp = setColorState;

  return (
    <>
      <div className='grid-container center'>
        <div className='canvas-container'>
         <Canvas />
        </div>

        <p></p>

        <div className='color-holder'>
          <ColorHolder />
        </div>
        <div className='color-picker-holder'>
          <ColorPicker />
        </div>
        <Pipette />
        <Bucket />
        <Eraser />
      </div>
    </>
  );
}

export default App;
