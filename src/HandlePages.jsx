import { useState, useRef } from "react";
import MainMenu from './MainMenu';
import App from "./App";
import './MainMenu.css'
import gif from './img/cat-spinning.gif'

export let canvasHeight;
export let canvasWidth;

const HandlePages = () => {
  const [currentPage, setCurrentPage] = useState(<MainMenu />)
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  const inputHeightRef = useRef();
  const inputWidthRef = useRef();

  const handleChange = event => {
    let height = inputHeightRef.current.value;
    if(!Number.isInteger(height))
      height=Math.round(height);
    if(!height)
      height = 16;
    if(height<0)
      height = height * -1;
    console.log(height);
    canvasHeight = height;

    let width = inputWidthRef.current.value;
    if(!Number.isInteger(width))
      width=Math.round(width);
    if(!width)
      width = 16;
    if(width<0)
      width = width * -1;
    console.log(width);
    canvasWidth = width;

    let elem = document.getElementsByClassName('page-container')[0];
    console.log(elem.style);
    elem.style.backgroundImage = '';
  };


  return(
    <div className="page-container" 
    style={{ backgroundImage: `url(${gif})` }}>
      {currentPage}
      {visible &&
      <div className="main-menu">
        <div className="input-holder">
          <input 
            className="input-button"
            ref={inputHeightRef}
            placeholder='height:'
            type="number"
            min='0'
            id="height"
            name="height"
            />
          <input 
            className="input-button"
            ref={inputWidthRef}
            placeholder="width:"
            type="number"
            min='0'
            id="width"
            name="width"
            />
        </div>
        <p></p>
        <button onClick={function() {removeElement(); handleChange(); setCurrentPage(<App />);}} className="page-button">Start drawing 🎨</button>
        <p className="credits">
          This site was created by
           <a href='https://github.com/KonstantinKolo'> Konstantin
          </a>
          . Check the <a href='https://github.com/KonstantinKolo/PixiArtSimple'>source code</a>.
        </p>
      </div>
      }
    </div>
  )
}
export default HandlePages;