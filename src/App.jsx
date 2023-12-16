import './App.css';
import { Canvas } from './DrawingMenu/Canvas.jsx';
import { ColorHolder } from './DrawingMenu/ColorHolder.jsx';

function App() {
  let colorS = 'rgb(0,0,0)';

  return (
    <>
      <div className='grid-container center'>
        <div className='canvas-container'>
         <Canvas colorS={ colorS }/>
        </div>

        <p></p>

        <div className='color-holder'>
          <ColorHolder colorS={ colorS }/>
        </div>
      </div>
    </>
  );
}

export default App;
