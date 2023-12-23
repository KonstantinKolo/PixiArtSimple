import { useState } from "react";

export let usingPip;
export let usingPipSet;
export let btnColorPipExp;
export let setBtnColorPipExp;

const Pipette = () => {
  const [statePip, setStatePip] = useState(false)
  usingPip = statePip;
  usingPipSet = setStatePip;

  const [btnColor, setBtnColor] = useState('#3d3d3d')
  btnColorPipExp = btnColor;
  setBtnColorPipExp = setBtnColor;

  const handleClick = (e) => {
    if(btnColor === '#3d3d3d'){
      setBtnColor('#2e2e2e');
      setStatePip(true);
    }
    else{
      setBtnColor('#3d3d3d');
      setStatePip(false);
    }
  }

  return(
    <div
    className="pipette"
    onClick={handleClick.bind(this)}
    style={{backgroundColor:btnColor}}
    >Pip</div>
  )
}
export { Pipette };