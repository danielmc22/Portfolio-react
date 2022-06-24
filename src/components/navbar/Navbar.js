import React, {useContext} from 'react';
import "../../components/navbar/navbar.css";

import About from "../../assets/information-button.png";
import Portfolio from "../../assets/portfolio1.png";
import Skills from "../../assets/experience.png";
import Contact from "../../assets/add-contact.png";
import SpainFlag from "../../assets/spain.png";
import UsaFlag from "../../assets/united-states.png";
import { langContext } from '../../context/langContext';
import { FormattedMessage} from "react-intl";


const Navbar = ( { scroll } ) => {
    const atTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
    }

    const idioma = useContext(langContext)

  return (

    <navbar className={`navbar ${ scroll > 20 ? "scrolling" : null }`}>
        <div onClick={atTop} className='navbar-logo'>
          <FormattedMessage id='navbar-welcome' defaultMessage="well" />
        </div>

        <div className='navbar-flags'>
            <button onClick={() => idioma.establecerLenguaje("es-COL")} >
                <img className='flag' src={SpainFlag} alt="flag spain" />
            </button>
            <button onClick={() => idioma.establecerLenguaje("en-US")}>
                <img className='flag' src={UsaFlag} alt="flag usa" />
            </button>
        </div>

        <div  className='navbar-iconos'>
            <a href="#about" id='bio' >
              <img src={About} alt="icono-1" />
            </a>

            <a href="#carousel" id='bio' >
              <img src={Portfolio} alt="icono-2" />
            </a>

            <a href="#skills" id='bio' >
              <img src={Skills} alt="icono-3" />
            </a>

            <a href="#contact" id='bio' >
              <img src={Contact} alt="icono-4" />
            </a>
        </div>

    </navbar>
  )
}

export default Navbar