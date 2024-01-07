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
    let widthElem = document.getElementsByClassName('width-select')[0];
    let heightElem = document.getElementsByClassName('height-select')[0];

    canvasWidth = Number(widthElem.value);
    canvasHeight = Number(heightElem.value);

    let elem = document.getElementsByClassName('page-container')[0];
    elem.style.backgroundImage = '';
  };


  return(
    <div className="page-container" 
    style={{ backgroundImage: `url(${gif})` }}>
      {currentPage}
      {visible &&
      <div className="main-menu">
        <div className="select-holder">
          <select className="width-select select-unit" required>
            <option value={16} disabled selected hidden>--WIDTH--</option>
            <option value={4}>4x4</option>
            <option value={8}>8x8</option>
            <option value={16}>16x16</option>
            <option value={24}>24x24</option>
          </select>
          <select className="height-select select-unit">
            <option value={16} disabled selected hidden>--HEIGHT--</option>
            <option value={4}>4x4</option>
            <option value={8}>8x8</option>
            <option value={16}>16x16</option>
            <option value={24}>24x24</option>
          </select>
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