import React from 'react'
import gif from '../../img/cat-welcome.gif'
import '../Pages.css'

export default function Home() {
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
    </>
  )
}
