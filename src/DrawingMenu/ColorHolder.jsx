import { useState } from 'react';
import { setBtnColorPipExp } from './DrawingItems/Pipette';
import { colorExp, setColorExp } from '../App';

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
    setColorExp(colorClass);
    setBtnColorPipExp('3d3d3d');
    var root = document.querySelector(':root');
    root.style.setProperty('--selectedColor', `${colorClass}`);
  }

  return (
    <>
      { colorArr.map((item) => {
        return <div className='color' colorCode={item.colorCode} style={{backgroundColor:item.colorCode}} onClick={function (e) {pickColor(item.colorCode)}}></div>;
      }) }
    </>
  )
}

export { ColorHolder };