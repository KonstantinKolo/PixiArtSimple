import { colorExp } from "../../App";
import { useState } from "react";

export let usingBuc;
export let usingBucSet;

const Bucket = () => {
  const [stateBuc, setStateBuc] = useState(false);
  usingBuc = stateBuc;
  usingBucSet = setStateBuc;

  const [btnColor, setBtnColor] = useState('#3d3d3d');

  const handleClick = (e) => {
    if(btnColor === '#3d3d3d'){
      setBtnColor('#2e2e2e');
      setStateBuc(true);
    }
    else{
      setBtnColor('#3d3d3d');
      setStateBuc(false);
    }
  }

  return(
    <>
      <div
      className="bucket"
      onClick={handleClick}
      style={{backgroundColor:btnColor}}
      >Buc</div>
    </>
  );
};
export { Bucket };