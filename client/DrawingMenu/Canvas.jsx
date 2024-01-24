

import { colorExp, setColorExp } from "../src/pages/DrawingPage";
import { usingBuc } from "./DrawingItems/Bucket";
import { usingErs } from "./DrawingItems/Eraser";
import { setBtnColorPipExp, usingPip, usingPipSet } from "./DrawingItems/Pipette";
import { usingRC } from "./DrawingItems/RemoveColors";
import { canvasHeight, canvasWidth } from "../src/pages/CreationMenu";
import { usingMag } from "./DrawingItems/Magnify";

const Canvas = () => {
  let counterX = 0;
  let counterY = 1;
  let isMouseDown = false;
  let isTouchDown = false;

  const bucSelector = (originalId) => {
    const checkColor = document.getElementById(originalId).style.backgroundColor;

    const recursionInSelector = (id) => {
      const idArray = id.split(',');
      const tU = document.getElementById(`${idArray[0]},${idArray[1]-1}`);
      const tL = document.getElementById(`${idArray[0]-1},${idArray[1]}`);
      const tD = document.getElementById(`${idArray[0]},${1+parseInt(idArray[1])}`);
      const tR = document.getElementById(`${1+parseInt(idArray[0])},${idArray[1]}`);
      let targetArr = [tU, tL, tD, tR];
      const helpArr = [];
      targetArr.forEach(function (element) {
        if(element){
          helpArr.push(element);
        }
      })
      targetArr = helpArr;
      targetArr.forEach(function(element) {
        if(element.style.backgroundColor === checkColor){
          if(element.nodeName === 'DIV'){
            element.style.backgroundColor = colorExp;
            recursionInSelector(element.id);
          }
        }
      })
    }

    recursionInSelector(originalId);
  } 

  const handleClick = event => {
    if(usingPip === true){
      setColorExp(event.target.style.backgroundColor);
      setBtnColorPipExp('#3d3d3d');
      usingPipSet(false);
      var root = document.querySelector(':root');
      root.style.setProperty('--selectedColor', `${event.target.style.backgroundColor}`);
    }
    else if(usingBuc === true){
      bucSelector(event.target.id);
    }
    else if(usingErs === true){
      event.target.style.backgroundColor = '';
    }
    else{
      console.log(event.target.style.backgroundColor);
      event.target.style.backgroundColor = colorExp;
    }
  }

  //for mobile
  // !!!!! need to add eraser to mobile !!!!!!
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
    if(usingErs === true){
      var root = document.querySelector(':root');
      if(event.target.classList.contains('square1'))
        root.style.setProperty('--selectedColor', `rgba(128,128,128,255)`);
      else if(event.target.classList.contains('square2'))
        root.style.setProperty('--selectedColor', `rgba(191,191,191,255)`);
    }
    if(usingErs === true && isMouseDown && event.target.classList.contains('square')){
      event.target.style.backgroundColor = '';
      event.target.classList.add('highlight');
    }
    else if (isMouseDown && event.target.classList.contains('square')) {
      event.target.style.backgroundColor = colorExp;
      event.target.classList.add('highlight');
    } else {
      event.target.classList.remove('highlight');
    } 
  });


  const squareHandler = (x, y) => {
    if(y % 2 === 0){
      if(x % 2 === 0){
        return(
          <div className='square1 square' 
            id={`${++counterX},${counterY}`} 
            onClick={handleClick.bind(this)}
          ></div>
        )
      }
      else {
        return(
          <div className='square2 square'
            id={`${++counterX},${counterY}`} 
            onClick={handleClick.bind(this)}
          ></div>
        )
      }
    }
    else{
      if(x % 2 !== 0){
        return(
          <div className='square1 square' 
            id={`${++counterX},${counterY}`} 
            onClick={handleClick.bind(this)}
          ></div>
        )
      }
      else {
        return(
          <div className='square2 square'
            id={`${++counterX},${counterY}`} 
            onClick={handleClick.bind(this)}
          ></div>
        )
      }
    }
  }

  return (
    <div className="screen-shot-target">
      {[...Array(canvasHeight)].map((x,i) => 
        <>
          {[...Array(canvasWidth)].map((x,i) =>
            <>
              {squareHandler(counterX,counterY)}
            </>
          )}
          <p id={`${counterX=0},${counterY++}`} className="pars" >&nbsp;</p>
        </>
      )}
    </div>
  )
}

export { Canvas } 