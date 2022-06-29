import React from 'react';
import './LinkCard.css';

import ImgLinkedin from './../img/linkedin.png';
import ImgGithub from './../img/github.png';
import ImgFacebook from './../img/facebook..png';
import ImgInstagram from './../img/instagram..png';

const ImgMap = {
  "linkedin": ImgLinkedin,
  "github": ImgGithub,
  "facebook": ImgFacebook,
  "instagram": ImgInstagram,
}

function LinkCard(props) {
  return (
    <div className={`card-container bg-${props.title}`}>
    <a href={props.link} className='card-link'>
      <div className='card-link-handle'>
        <div>
          <img src={ImgMap[props.title]} className='card-img'/>
        </div>
        <div className='card-title'>
          <h3 className='card-name'>{props.username}</h3>
        </div>
      </div>
      <div className='card-description'>
        <p>{props.tagline}</p>
      </div>
      </a>
    </div>
  )
}

export default LinkCard
