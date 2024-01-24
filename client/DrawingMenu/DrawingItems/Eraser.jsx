import { useState } from "react";
import { colorExp, setColorExp } from '../../src/pages/DrawingPage'
import img from '../../img/eraser.png'

export let usingErs;
export let usingErsSet;

const Eraser = () => {
  const [stateErs, setStateErs] = useState(false)
  usingErs = stateErs;
  usingErsSet = setStateErs;

  const [btnColor, setBtnColor] = useState('#f977c1')

  const [lastColor, setLastColor] = useState();

  const handleClick = (e) => {
    if(btnColor === '#f977c1'){
      // setLastColor(colorExp);
      // setColorExp('')
      e.target.classList.add('selected-tool');
      setBtnColor('#f952b1');
      setStateErs(true);
    }
    else{
      var root = document.querySelector(':root');
      root.style.setProperty('--selectedColor', `${colorExp}`);
      e.target.classList.remove('selected-tool');
      setBtnColor('#f977c1');
      setStateErs(false);
    }
  }

  return(
    <div
    className="eraser tool"
    onClick={handleClick.bind(this)}
    style={{backgroundColor:btnColor,
    backgroundImage:`url(${img})`}}
    ></div>
  )
}
export { Eraser };