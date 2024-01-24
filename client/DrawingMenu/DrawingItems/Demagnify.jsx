import { useState } from "react"
import img from '../../img/magnify-minus.png'
import { usingMag, usingMagSet } from "./Magnify";

export let numberOfDM;
export let numberOfDMSet;
const Demagnify = () => {
  const [btnColor, setBtnColor] = useState('#f977c1');
  const [dmNum, setdmNum] = useState(0);
  numberOfDM = dmNum;
  numberOfDMSet = setdmNum;

  const handleDemagnification = () => {
    let colectionSquares  = document.querySelectorAll('.square');
    let collectionPargaraphs = document.querySelectorAll('.pars');
    let marginTop;

    if(usingMag === true){
      for(let i = 0; i < collectionPargaraphs.length; i++){
        let par = collectionPargaraphs[i];
        par.style.marginTop = `-38px`;
      }
      setdmNum(0);
      for (let i = 0; i < colectionSquares.length; i++) {
        let elem = colectionSquares[i];
        elem.style.height = `18px`;
        elem.style.width = `18px`;
      }
      usingMagSet(false);
    }
    else{
      for(let i = 0; i < collectionPargaraphs.length; i++){
        let par = collectionPargaraphs[i];
        
        marginTop = window.getComputedStyle(par).getPropertyValue('margin-top');
        marginTop = marginTop.replace('px','');
        marginTop = Number(marginTop) - 1;
        console.log(marginTop);
        if(marginTop < -42)
        break;
      
        par.style.marginTop = `${marginTop}px`;
      }
      if(marginTop >= -42)
        setdmNum(dmNum + 1);
      for (let i = 0; i < colectionSquares.length; i++) {
        if(marginTop < -42)
          break;
  
        let elem = colectionSquares[i];
        let height = window.getComputedStyle(elem).getPropertyValue('height');
        height = height.replace('px','');
        height = Number(height) - 1;
        height = Math.round(height);
        
        let width = window.getComputedStyle(elem).getPropertyValue('width');
        width = width.replace('px','');
        width = Number(width) - 1;
        width = Math.round(width);
        
        if(width < 2)
        break;
      elem.style.height = `${height}px`;
      elem.style.width = `${width}px`;
      }
    }
  }
  const handleClick = (e) => {
    handleDemagnification();
  }

  return(
    <div
    className="demagnify tool"
    onClick={handleClick.bind(this)}
    style={{backgroundColor:btnColor,
    backgroundImage:`url(${img})`}}
    ></div>
  )
}
  export { Demagnify }