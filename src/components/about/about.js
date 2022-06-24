import React, {useContext} from 'react';
import "./about.css";
import Photo from "../../assets/myPhoto.jpg";
import Cv from "../../assets/CV_Daniel_Martinez.pdf"
import {FormattedMessage} from "react-intl";
import { langContext } from '../../context/langContext';

const About = () => {


  return (

    <div className='about-container' id='about'>

        <div className='about-descrip'>
            <h3>
              <FormattedMessage id='about-title' defaultMessage="About me :"  />
            </h3>

            <p>
            <FormattedMessage id='about-desc' defaultMessage="About me :" />
            </p>
            

            <span className='below' id='below'>
              <FormattedMessage id='about-desc-below' defaultMessage="About me :" />
            </span>

            <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <a href={Cv} download="Daniel_Martinez_CV" target="_blanck" class="button-text">
                    <FormattedMessage id='text-button' defaultMessage="About me :" />
                </a>
            </button>
        </div>

        <div className='about-img'>
            <img  src={Photo} alt='my photo' />
        </div>
    </div>

  )
}

export default About