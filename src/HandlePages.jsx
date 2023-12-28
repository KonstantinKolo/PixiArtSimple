import { useState } from "react";
import MainMenu from './MainMenu';
import App from "./App";

const HandlePages = () => {
  const [currentPage, setCurrentPage] = useState(<MainMenu />)
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return(
    <>
      {currentPage}
      {visible &&
      <button onClick={function() {removeElement(); setCurrentPage(<App />);}}>Change Page</button>
      }
    </>
  )
}
export default HandlePages;