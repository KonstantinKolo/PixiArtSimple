import { useState } from 'react';
import { ColorPicker } from './ColorPicker';

export const addColor = (colorCode, outsideColorArr, outsideSetColorArr) => {
  outsideSetColorArr(
  [
    ...outsideColorArr, 
    { colorCode: colorCode}
  ]
  );
}
export let outsideColorArr;
export let outsideSetColorArr;

const ColorHolder = () => {
  const [colorArr, setColorArr] = useState([
    {
      colorCode:'#FF0000'
    },
    {
      colorCode:'#00FF00'
    }
  ]);

  outsideColorArr=colorArr;
  outsideSetColorArr=setColorArr;

  const pickColor = (colorClass) => {
    let colorS = colorClass;
    var root = document.querySelector(':root');
    root.style.setProperty('--selectedColor', `${colorS}`);
    console.log('hey');
  }

  return (
    <>
      { colorArr.map((item) => {
        return <div className='color' colorCode={item.colorCode} style={{backgroundColor:item.colorCode}} onClick={function (e) {pickColor(item.colorCode)}}></div>;
      }) }

      {/* <div className="red color" onClick={function (e) {pickColor('255,0,0')}}></div>
      <div className="blue color" onClick={function (e) {pickColor('0,0,255')}}></div>
      <div className="green color" onClick={function (e) {pickColor('34,139,34')}}></div>
      <div className="pink color" onClick={function (e) {pickColor('255,192,203')}}></div> */}
    </>
  )
}

export { ColorHolder };