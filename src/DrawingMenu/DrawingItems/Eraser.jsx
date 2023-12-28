import { useState } from "react";
import { colorExp, setColorExp } from "../../App";

export let usingErs;
export let usingErsSet;

const Eraser = () => {
  const [stateErs, setStateErs] = useState(false)
  usingErs = stateErs;
  usingErsSet = setStateErs;

  const [btnColor, setBtnColor] = useState('#3d3d3d')

  const [lastColor, setLastColor] = useState();

  const handleClick = (e) => {
    if(btnColor === '#3d3d3d'){
      // setLastColor(colorExp);
      // setColorExp('')
      setBtnColor('#2e2e2e');
      setStateErs(true);
    }
    else{
      var root = document.querySelector(':root');
      root.style.setProperty('--selectedColor', `${colorExp}`);
      setBtnColor('#3d3d3d');
      setStateErs(false);
    }
  }

  return(
    <div
    className="eraser"
    onClick={handleClick.bind(this)}
    style={{backgroundColor:btnColor}}
    >Ers</div>
  )
}
export { Eraser };