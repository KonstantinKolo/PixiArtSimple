import html2canvas from "html2canvas";
import { numberOfDMSet } from "./DrawingItems/Demagnify";
import { usingMagSet } from "./DrawingItems/Magnify";
import axios from "axios";
import { canvasWidth, canvasHeight } from "../src/pages/CreationMenu";
import { email, setEmail } from "../src/App";

export const takeScreenShot = (elementId, fileName, fileType, backgroundColor='#000000') => {
  let colectionSquare  = document.querySelectorAll('.square');
  let colectionPars  = document.querySelectorAll('.pars');
  console.log(canvasHeight);

  for(let i = 0; i < colectionPars.length; i++){
    let par = colectionPars[i];
    par.style.marginTop = `-38.5px`;
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


export const getPic = async() => {
  let colectionSquare  = document.querySelectorAll('.square');
  let colectionPars  = document.querySelectorAll('.pars');

  const outputArr = [];
  outputArr.push(canvasWidth);
  outputArr.push(canvasHeight);

  console.log(canvasHeight);

  for(let i = 0; i < colectionPars.length; i++){
    let par = colectionPars[i];
    par.style.marginTop = `-38.5px`;
  }
  numberOfDMSet(0);
  for (let i = 0; i < colectionSquare.length; i++) {
    let elem = colectionSquare[i];

    let color = window.getComputedStyle(elem).getPropertyValue('background-color');
    color = color.replace('rgb','').replace('(','').replace(')','');
    outputArr.push(color)

    elem.style.height = `18px`;
    elem.style.width = `18px`;
  }
  usingMagSet(false);

  await axios.post('./updatePic', {
    outputArr: outputArr,
    email: email
  });
  // const element = document.getElementsByClassName(elementId)[0];

  // if(!element){
  //   return;
  // }
  // html2canvas(element, {
  //   backgroundColor: backgroundColor,
  // }).then(async(canvas) => {
  // }).catch(err => {
  //   console.error('We cannot take the screenshot at the moment.')
  //   console.error(err);
  // })
  // // return -1;
}