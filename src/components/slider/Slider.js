import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from './Slides';
import "./slider.css";
import { FormattedMessage} from "react-intl";

const Slider = () => {
  return (
    <div className='carousel-container' id='carousel'>
        <div className='carousel-title'>
            <h2>
              <FormattedMessage 
                id='projects-title' 
                defaultMessage="ERROR" 
                />
            </h2>
        </div>

        <Carousel className='carouselNeto'
            arrows
            slidesPerPage={4}
            infinite
            animationSpeed={2000}
            centered
            offset={25}
            itemWidth={240}
            slides={Slides}
        />
    </div>
  )
}

export default Slider