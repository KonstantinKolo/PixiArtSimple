import { useState } from "react";
import img from '../../img/pipette.png'

export let usingPip;
export let usingPipSet;
export let btnColorPipExp;
export let setBtnColorPipExp;

const Pipette = () => {
  const [statePip, setStatePip] = useState(false)
  usingPip = statePip;
  usingPipSet = setStatePip;

  const [btnColor, setBtnColor] = useState('#f977c1')
  btnColorPipExp = btnColor;
  setBtnColorPipExp = setBtnColor;

  const handleClick = (e) => {
    if(btnColor === '#f977c1'){
      e.target.classList.add('selected-tool');
      setBtnColor('#f952b1');
      setStatePip(true);
    }
    else{
      e.target.classList.remove('selected-tool');
      setBtnColor('#f977c1');
      setStatePip(false);
    }
  }

  return(
    <div
    className="pipette tool"
    onClick={handleClick.bind(this)}
    style={{backgroundColor:btnColor,
    backgroundImage:`url(${img})`}}
    ></div>
  )
}
export { Pipette };