import { useState, useRef } from "react";
import MainMenu from './MainMenu';
import App from "./App";

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
  };


  return(
    <>
      {currentPage}
      {visible &&
      <>
        <button onClick={function() {removeElement(); handleChange(); setCurrentPage(<App />);}}>Change Page</button>
        <p></p>
        <input 
          ref={inputHeightRef}
          placeholder='16'
          type="number"
          min='0'
          id="height"
          name="height"
        />
        <input 
          ref={inputWidthRef}
          placeholder="16"
          type="number"
          min='0'
          id="width"
          name="width"
        />
        {/* <button onClick={handleChange}>Log message</button> */}
      </>
      }
    </>
  )
}
export default HandlePages;