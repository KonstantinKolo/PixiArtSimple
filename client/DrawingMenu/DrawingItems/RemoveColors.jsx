import { useState } from "react";
import img from '../../img/remove-color.png'

export let usingRC;
export let usingRCSet;

const RemoveColors = () => {
  const [stateRC, setStateRC] = useState(false)
  usingRC = stateRC;
  usingRCSet = setStateRC;

  const [btnColor, setBtnColor] = useState('#f977c1')

  const handleClick = e => {
    if(btnColor === '#f977c1'){
      // setLastColor(colorExp);
      // setColorExp('')
      e.target.classList.add('selected-tool');
      setBtnColor('#f952b1');
      setStateRC(true);
    }
    else{
      e.target.classList.remove('selected-tool');
      setBtnColor('#f977c1');
      setStateRC(false);
    }
  }

  return(
    <div
    className="remove-colors tool"
    onClick={handleClick.bind(this)}
    style={{backgroundColor:btnColor,
    backgroundImage:`url(${img})`}}
    ></div>
  )
}
export { RemoveColors }