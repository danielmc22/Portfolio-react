import React from 'react';
import "./footer.css";
import Cv from "../../assets/cv.png";
import Cvitae from "../../assets/CV_Daniel_Martinez.pdf";
import { FormattedMessage} from "react-intl";

const Footer = () => {
  return (

    <footer className='footer'>

        <div className='footer-info' id='contact'>
            <h1>Daniel Martínez</h1>
            <p>
                <FormattedMessage id='footer-based' defaultMessage="error" />
            </p>
        </div>

        <div className='footer-contact'>
            <h3>
                <FormattedMessage id='footer-contact' defaultMessage="error" />
            </h3>
        </div>
        

        <div className='footer-sns'>
            <div className='links-media'>
                <a href='https://www.linkedin.com/in/daniel-mart%C3%ADnez-dev/' target="_blank" rel="noreferrer">
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://github.com/danielmc22?tab=repositories' target="_blank" rel="noreferrer">
                    <i className='fab fa-github github'></i>
                </a>
                <a href='http://wa.link/jabw3p' target="_blank" rel="noreferrer">
                    <i className='fab fa-whatsapp whatsapp'></i>
                </a>
                <a href={Cvitae} download="Daniel_Martinez_CV" target="_blanck" rel="noreferrer" >
                <img src={Cv} className='cv-icon' alt="icono-4" />
                </a>
            </div>
        </div>


    </footer>
  )
}

export default Footer