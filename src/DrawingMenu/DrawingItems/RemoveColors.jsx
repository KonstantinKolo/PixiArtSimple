import { useState } from "react";

export let usingRC;
export let usingRCSet;

const RemoveColors = () => {
  const [stateRC, setStateRC] = useState(false)
  usingRC = stateRC;
  usingRCSet = setStateRC;

  const [btnColor, setBtnColor] = useState('#3d3d3d')

  const handleClick = e => {
    if(btnColor === '#3d3d3d'){
      // setLastColor(colorExp);
      // setColorExp('')
      setBtnColor('#2e2e2e');
      setStateRC(true);
    }
    else{
      setBtnColor('#3d3d3d');
      setStateRC(false);
    }
  }

  return(
    <div
    className="remove-colors"
    onClick={handleClick.bind(this)}
    style={{backgroundColor:btnColor}}
    >RC</div>
  )
}
export { RemoveColors }