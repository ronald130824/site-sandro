import React from 'react'
import Head from "./head"


const head = () => {
  return (
    <div>
      <section className='head'>
        <div className="container flexSB">
          <div className="logo">
            <h1>UNICENTRO-MA</h1>
            <span>COMPROMISSO COM O PRESENTE, TRNASFORMANDO O FUTURO.</span>
          </div>
          <div className="social">
            {/* ------------------------------------------- */}
            <i className='fab fa-facebook-f icon'></i>
            {/* ------------------------------------------- */}
            <a href="https://www.instagram.com/ron4ld_player1/">
              <i className='fab fa-instagram icon'></i>
            </a>
            {/* ------------------------------------------- */}
            <a href="http://api.whatsapp.com/?phone=99999878749&text=oi+Ronald, vi seu site">
              <i className='fab fa-whatsapp icon'></i>
            </a>
            {/* ------------------------------------------- */}
            <i className='fab fa-twitter icon'></i>
            {/* ------------------------------------------- */}
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </div>

  )
}

export default head
