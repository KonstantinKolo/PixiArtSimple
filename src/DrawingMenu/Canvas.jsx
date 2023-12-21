import { colorExp, setColorExp } from "../App";
import { setBtnColorExp, usingPip, usingPipSet } from "./DrawingItems/Pipette";

const Canvas = () => {
  let counter = 0;
  let isMouseDown = false;
  let isTouchDown = false;

  const handleClick = event => {
    if(usingPip === true){
      setColorExp(event.target.style.backgroundColor);
      setBtnColorExp('#3d3d3d');
      usingPipSet(false);
      var root = document.querySelector(':root');
      root.style.setProperty('--selectedColor', `${event.target.style.backgroundColor}`);
    }
    else
      event.target.style.backgroundColor = colorExp;
  }

  //for mobile
  document.addEventListener('touchstart', function(event) {
    isTouchDown = true;
   });
   document.addEventListener('touchend', function(event) {
     isTouchDown = false;  
   });
   
   document.addEventListener('touchmove', function(event) {
     let realTarget = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
      if (isTouchDown && realTarget.classList.contains('square')) {
        realTarget.style.backgroundColor = colorExp;
        realTarget.classList.add('highlight');
     } else {
       event.target.classList.remove('highlight');
     }
   });
   //for pc
  document.addEventListener('mousedown', function(event) {
    if (event.button === 0) {
      isMouseDown = true;
    }
  });
  document.addEventListener('mouseup', function(event) {
    if (event.button === 0) {
      isMouseDown = false;
    }
  });
  document.addEventListener('mousemove', function(event) {
    if (isMouseDown && event.target.classList.contains('square')) {
      event.target.style.backgroundColor = colorExp;
      event.target.classList.add('highlight');
    } else {
      event.target.classList.remove('highlight');
    } 
  });


  return (
    <>
      {[...Array(8)].map((x, i) => 
        <>
          <p>&nbsp;</p>
          {[...Array(8)].map((x, i) =>
            <>
              <div className='square1 square' 
              id={++counter} 
              onClick={handleClick.bind(this)}
              ></div>

              <div className='square2 square'
              id={++counter} 
              onClick={handleClick.bind(this)}
               ></div>
            </>
          )}
          <p>&nbsp;</p>
          {[...Array(8)].map((x, i) =>
            <>
              <div className='square2 square'
              id={++counter}
              onClick={handleClick.bind(this)}
               ></div>

              <div className='square1 square'
              id={++counter}
              onClick={handleClick.bind(this)}
               ></div>
            </>
          )}
        </>
      )}
    </>
  )
}

export { Canvas }; 