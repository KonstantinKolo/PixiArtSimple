import { ChromePicker } from "react-color";
import { useState } from "react";
import { addColor, outsideColorArr, outsideSetColorArr } from "./ColorHolder";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState('#D0021B');

  const handleChangeComplete = (color) => {
    setCurrentColor(color);
  };
  const handleColorButton = () => {
    addColor(currentColor.hex, outsideColorArr, outsideSetColorArr);
    console.log(currentColor.hex);
  }

  return (
    <div className="App">
      <ChromePicker
        onChange={handleChangeComplete}
        color={currentColor}
      />

      <button onClick={function(e) {handleColorButton(currentColor)}}>Add</button>
    </div>
  );
}

export { ColorPicker };