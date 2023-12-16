const Canvas = ({colorS}) => {
  let counter = 0;
  let isMouseDown = false;
  let isTouchDown = false;

  const handleClick = event => {
    var root = document.querySelector(':root');
    colorS = root.style.getPropertyValue('--selectedColor');
    if(!colorS){
      colorS = 'rgb(0,0,0)'
    }
    // root.style.setProperty('--selectedColor', `${colorS}`);
    event.target.style.backgroundColor = colorS;
    // console.log(Object.values(colorS));
    // console.log(event.target.id + 'hey');
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
        var root = document.querySelector(':root');
        colorS = root.style.getPropertyValue('--selectedColor');
        if(!colorS){
          colorS = 'rgb(0,0,0)'
        }

        realTarget.style.backgroundColor = colorS;
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
      var root = document.querySelector(':root');
      colorS = root.style.getPropertyValue('--selectedColor');
      if(!colorS){
        colorS = 'rgb(0,0,0)'
      }

      event.target.style.backgroundColor = colorS;
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