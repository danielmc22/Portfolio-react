import React from 'react';
import "./info.css";
import ImgBack1 from "../../assets/node.png"
import ImgBack2 from "../../assets/express.png"
import ImgBack3 from "../../assets/mongoDB2.png"
import ImgBack4 from "../../assets/postman2.png"

import ImgFront1 from "../../assets/html-5.png"
import ImgFront2 from "../../assets/css-3.png"
import ImgFront3 from "../../assets/js.png"
import ImgFront4 from "../../assets/react.png"
import ImgFront5 from "../../assets/bootstrap.png"
import ImgFront6 from "../../assets/github.png"

import ImgSoft1 from "../../assets/idea1.png"
import ImgSoft2 from "../../assets/idea.png"
import ImgSoft3 from "../../assets/leadership.png"
import ImgSoft4 from "../../assets/reading.png"
import ImgSoft5 from "../../assets/task.png"
import ImgSoft6 from "../../assets/teamwork.png"

import { FormattedMessage} from "react-intl";


const Info = () => {

  return (
    <div className='clasex' id='skills' >

        <div className="info-title">
            <p> <FormattedMessage id='skills-title' defaultMessage="error" /> </p> 
        </div>

        <div class="card-container1">
          <div class="content">
            <div class="front">
                <h3>BACKEND</h3>
                <h6> <FormattedMessage id='hover' defaultMessage="error" /> </h6>
            </div>
            <div class="back">
            <div className='skill'>
                  <span className='span1'></span>
                    <FormattedMessage id='skill-back-1' defaultMessage="error" />
              </div>
              <div className='skill'>
                  <span className='span1'></span>
                  <FormattedMessage id='skill-back-2' defaultMessage="error" />
              </div>
              <div className='skill'>
                  <span className='span1'></span>
                  <FormattedMessage id='skill-back-3' defaultMessage="error" />
              </div>
              <div className='skill'>
                  <span className='span1'></span>
                  <FormattedMessage id='skill-back-4' defaultMessage="error" />
              </div>
              <div className='skill-logos-container'>
                  <h2 className='h2-title'> <FormattedMessage id='tools' defaultMessage="error" /> </h2>
                  <div className='container-logo-front-a'>
                      <img src={ImgBack1} alt="img-front-6" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-a'>
                      <img src={ImgBack2} alt="img-back-2" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-a'>
                      <img src={ImgBack3} alt="img-back-3" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-a'>
                      <img src={ImgBack4} alt="img-back-4" className='skills-logos-img'></img>
                  </div>
              </div>
            </div>
          </div>
        </div>


        <div class="card-container2">
          <div class="content">
            <div class="front">
                <h3>FRONTEND</h3>
                <h6> <FormattedMessage id='hover' defaultMessage="error" /> </h6>
            </div>
            <div class="back">

            <div className='skill'>
                  <span className='span1'></span>
                  <FormattedMessage id='skill-front-1' defaultMessage="error" />
              </div>
              <div className='skill'>
                  <span className='span1'></span>
                  <FormattedMessage id='skill-front-2' defaultMessage="error" />
              </div>
              <div className='skill'>
                  <span className='span1'></span>
                  <FormattedMessage id='skill-front-3' defaultMessage="error" />
              </div>

              <div className='skill-logos-container b'>
                  <h2 className='h2-title-b'> <FormattedMessage id='tools' defaultMessage="error" /> </h2>

                  <div className='container-logo-front-b'>
                      <img src={ImgFront1} alt="img-front-1" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-b'>
                      <img src={ImgFront2} alt="img-front-2" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-b'>
                      <img src={ImgFront3} alt="img-front-3" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-b'>
                      <img src={ImgFront4} alt="img-front-4" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-b'>
                      <img src={ImgFront5} alt="img-front-5" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-b'>
                      <img src={ImgFront6} alt="img-front-6" className='skills-logos-img'></img>
                  </div>
              </div>
            </div>
          </div>
        </div>


        <div class="card-container3">
          <div class="content">
            <div class="front">
                <h3> <FormattedMessage id='soft-skills' defaultMessage="error" /> </h3>
                <h6> <FormattedMessage id='hover' defaultMessage="error" /> </h6>
            </div>
            <div class="back">
            <div className='skill-3'>
                  <span className='span1'></span>
                  <FormattedMessage id='skill-soft-1' defaultMessage="error" />
              </div>
              <div className='skill-3'>
                  <span className='span1'></span>
                  <FormattedMessage id='skill-soft-2' defaultMessage="error" />
              </div>
              <div className='skill-3'>
                  <span className='span1'></span>
                  <FormattedMessage id='skill-soft-3' defaultMessage="error" />
              </div>
              <div className='skill-3'>
                  <span className='span1'></span>
                  <FormattedMessage id='skill-soft-4' defaultMessage="error" />
              </div>

              <div className='skill-logos-container b'>
                  <h2 className='h2-title-b'> <FormattedMessage id='tools' defaultMessage="Main Tools" /> </h2>

                  <div className='container-logo-front-b'>
                      <img src={ImgSoft1} alt="img-front-1" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-b'>
                      <img src={ImgSoft2} alt="img-front-2" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-b'>
                      <img src={ImgSoft3} alt="img-front-3" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-b'>
                      <img src={ImgSoft4} alt="img-front-4" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-b'>
                      <img src={ImgSoft5} alt="img-front-5" className='skills-logos-img'></img>
                  </div>
                  <div className='container-logo-front-b'>
                      <img src={ImgSoft6} alt="img-front-6" id='contact' className='skills-logos-img'></img>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Info