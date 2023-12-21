import { useState } from "react";

export let usingPip;
export let usingPipSet;
export let btnColorExp;
export let setBtnColorExp;

const Pipette = () => {
  const [statePip, setStatePip] = useState(false)
  usingPip = statePip;
  usingPipSet = setStatePip;

  const [btnColor, setBtnColor] = useState('#3d3d3d')
  btnColorExp = btnColor;
  setBtnColorExp = setBtnColor;

  const handleClick = (e) => {
    setBtnColorExp('#2e2e2e');
    setStatePip(true);
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