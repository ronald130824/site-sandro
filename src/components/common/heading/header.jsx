
import { useState } from "react"
import Head from "./head"
import "./style.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"} on onClick={() => setClick(false)}>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/institucional">Institucional</Link>
            </li>
            <li>
              <Link to="/graduacao">Graduação</Link>
            </li>
            <li>
              <Link to="/pos">Pós-Graduação</Link>
            </li>
            <li>
              <Link to="/ingressar">Ingressar</Link>
            </li>
            <li>
              <Link to="/academico">Acadêmico</Link>
            </li>
            <li>
              <Link to="/acesso-rapido">Acesso Rápido</Link>
            </li>
            <li>
              <Link to="/egressos">Egressos</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  )
}
export default Header
