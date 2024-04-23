import React from 'react'
import { useLocation } from 'react-router-dom'
import AboutCard from '../../about/AboutCard'

const Back = ({ title }) => {
  const location = useLocation()
  return (
    <div>
      <div className="imagem"></div>
      <section className='back'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <AboutCard />
    </div>
  )
}

export default Back
