import { useRef } from 'react';

const ColorHolder = ({colorS}) => {
  
  const pickColor = colorClass => {
    colorS = `rgb(${colorClass})`;
    var root = document.querySelector(':root');
    root.style.setProperty('--selectedColor', `${colorS}`);
  }

  return (
    <>
      <div className="red color" onClick={function (e) {pickColor('255,0,0')}}></div>
      <div className="blue color" onClick={function (e) {pickColor('0,0,255')}}></div>
      <div className="green color" onClick={function (e) {pickColor('34,139,34')}}></div>
      <div className="pink color" onClick={function (e) {pickColor('255,192,203')}}></div>
    </>
  )
}

export { ColorHolder };