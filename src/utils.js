import html2canvas from "html2canvas";
import { canvasHeight, canvasWidth } from "./HandlePages";
import { numberOfDMSet } from "./DrawingMenu/DrawingItems/Demagnify";
import { usingMagSet } from "./DrawingMenu/DrawingItems/Magnify";

export const takeScreenShot = (elementId, fileName, fileType, backgroundColor='#000000') => {
  let colectionSquare  = document.querySelectorAll('.square');
  let colectionPars  = document.querySelectorAll('.pars');
  console.log(canvasHeight);

  for(let i = 0; i < colectionPars.length; i++){
    let par = colectionPars[i];
    par.style.marginTop = `-36.1px`;
  }
  numberOfDMSet(0);
  for (let i = 0; i < colectionSquare.length; i++) {
    let elem = colectionSquare[i];
    elem.style.height = `18px`;
    elem.style.width = `18px`;
  }
  usingMagSet(false);

  const element = document.getElementsByClassName(elementId)[0];

  if(!element){
    return;
  }
  html2canvas(element, {
    backgroundColor: backgroundColor,
  }).then((canvas) => {
    let image = canvas.toDataURL(fileType);
    const a = document.createElement('a');
    a.href = image;
    a.download = fileName;
    a.click();
  }).catch(err => {
    console.error('We cannot take the screenshot at the moment.')
    console.error(err);
  })
}