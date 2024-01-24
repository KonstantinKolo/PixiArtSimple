import { useState } from "react"
import img from '../../img/magnify-plus.png'
import { canvasWidth } from "../../src/pages/CreationMenu";
import { numberOfDM, numberOfDMSet } from "./Demagnify";

export let usingMag;
export let usingMagSet;

const Magnify = () => {
  const [btnColor, setBtnColor] = useState('#f977c1');
  const [usingM, usingMSet] = useState(false)
  usingMag = usingM;
  usingMagSet = usingMSet;

  const handleMagnification = () => {
    usingMSet(true);
    let colectionSquares  = document.querySelectorAll('.square');

    let canvasWidthPX = document.querySelector('.canvas-container');
    canvasWidthPX =  window.getComputedStyle(canvasWidthPX).getPropertyValue('width');
    canvasWidthPX = canvasWidthPX.replace('px','');

    let canvasHeightPX = document.querySelector('.canvas-container');
    canvasHeightPX =  window.getComputedStyle(canvasHeightPX).getPropertyValue('height');
    canvasHeightPX = canvasHeightPX.replace('px','');

    let decidingFactor;
    if(Number(canvasHeightPX) < Number(canvasWidthPX))
      decidingFactor = canvasHeightPX;
    else
      decidingFactor = canvasWidthPX;

    if(numberOfDM > 0){
      let collectionPargaraphs = document.querySelectorAll('.pars');

      for(let i = 0; i < collectionPargaraphs.length; i++){
        let par = collectionPargaraphs[i];
  
        let marginTop = window.getComputedStyle(par).getPropertyValue('margin-top');
        marginTop = marginTop.replace('px','');
        marginTop = Number(marginTop) + 1;
        par.style.marginTop = `${marginTop}px`;
      }
      numberOfDMSet(numberOfDM - 1);
    }
    for (let i = 0; i < colectionSquares.length; i++) {
      
      let elem = colectionSquares[i];
      let height = window.getComputedStyle(elem).getPropertyValue('height');
      height = height.replace('px','');
      height = Number(height) + 2;
      height = Math.round(height);
      
      let width = window.getComputedStyle(elem).getPropertyValue('width');
      width = width.replace('px','');
      width = Number(width) + 2;
      width = Math.round(width);
      
      if(canvasWidth * width >= decidingFactor)
        break;
      elem.style.height = `${height}px`;
      elem.style.width = `${width}px`;
    }

  }
  const handleClick = (e) => {
    handleMagnification();
  }

  return(
    <div
    className="magnify tool"
    onClick={handleClick.bind(this)}
    style={{backgroundColor:btnColor,
    backgroundImage:`url(${img})`
    }}
    ></div>
  )
}
export { Magnify }