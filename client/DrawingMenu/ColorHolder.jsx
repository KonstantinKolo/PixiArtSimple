import { useState } from 'react';
import { setBtnColorPipExp } from './DrawingItems/Pipette';
import { setColorExp } from '../src/pages/DrawingPage';
import { usingRC } from './DrawingItems/RemoveColors';

export const addColor = (colorCode, outsideColorArr, outsideSetColorArr) => {
  if(outsideColorArr.length >= 64){
    outsideColorArr.push({colorCode:colorCode});
    outsideSetColorArr(outsideColorArr => {
      return(
      outsideColorArr.filter((value, i) => i !== 0)
    )  
    })
  }
  else if(outsideColorArr.length < 64){
    outsideSetColorArr(
    [
      ...outsideColorArr, 
      { colorCode: colorCode}
    ]
    );
  }
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

  const pickColor = (item) => {
    if(usingRC === true){
      // colorArr.filter(item)
      setColorArr(current =>
        current.filter(element => {
          return element !== item;
        }),
      );
    }
    else{
      setColorExp(item.colorCode);
      setBtnColorPipExp('3d3d3d');
      var root = document.querySelector(':root');
      root.style.setProperty('--selectedColor', `${item.colorCode}`);
    }
  }

  return (
    <>
      { colorArr.map((item) => {
        return <div className='color' colorCode={item.colorCode} style={{backgroundColor:item.colorCode}} onClick={function (e) {pickColor(item)}}></div>;
      }) }
    </>
  )
}

export { ColorHolder };