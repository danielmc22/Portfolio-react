import React from 'react';
import "../../components/cover/cover.css";
import coverVideo from "../../assets/coverVideo4.mp4";
import { FormattedMessage} from "react-intl";


const Cover = () => {
  return (
    
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted />
        <h1>DANIEL MARTÍNEZ</h1>
        <h3>
          <FormattedMessage id='header-desc' defaultMessage="error" />  
        </h3>
    </div>

  )
}

export default Cover