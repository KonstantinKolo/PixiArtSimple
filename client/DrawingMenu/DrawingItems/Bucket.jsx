import { useState } from "react";
import img from '../../img/bucket.png'

export let usingBuc;
export let usingBucSet;

const Bucket = () => {
  const [stateBuc, setStateBuc] = useState(false);
  usingBuc = stateBuc;
  usingBucSet = setStateBuc;

  const [btnColor, setBtnColor] = useState('#f977c1');

  const handleClick = (e) => {
    if(btnColor === '#f977c1'){
      e.target.classList.add('selected-tool');
      setBtnColor('#f952b1');
      setStateBuc(true);
    }
    else{
      e.target.classList.remove('selected-tool');
      // console.log(e.target.style.backgroundColor);
      setBtnColor('#f977c1');
      setStateBuc(false);
    }
  }

  return(
    <>
      <div
      className="bucket tool"
      onClick={handleClick.bind(this)}
      style={{backgroundColor:btnColor,
      backgroundImage:`url(${img})`}}
      ></div>
    </>
  );
};
export { Bucket };