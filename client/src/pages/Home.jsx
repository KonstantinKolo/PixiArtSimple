import React from 'react'
import gif from '../../img/cat-welcome.gif'
import '../Pages.css'
import '../App.css'
import Modal from 'react-modal'

export default function Home() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      <div style={{
        position:'absolute',
        bottom:'15%',
        width:'100%'
      }}>
        <img src={gif} width='30%' />
      </div>
        <h1
        style={{
          position:'absolute',
          top:'20px',
          width:'100%',
          fontSize:'90px',
          fontFamily:'Lucida Handwriting',
          color:'#f977c1'
        }}
        >Welcome To PixiArtSimple!</h1>

        <Modal
        isOpen={isMobile}
        contentLabel="Loading Modal"
        className="loading-modal"
        overlayClassName="loading-overlay"
      >
        <h2 style={{color:'black'}}>Your screen is not wide enough for the application!</h2>
      </Modal>
    </>
  )
}
