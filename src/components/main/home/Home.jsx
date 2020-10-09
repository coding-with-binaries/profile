import React from 'react';
import Texts from '../../../constants/text-en';
import './Home.css';

export default function () {
  return (
    <div className="app-home">
      <div className="app-home-content">
        <div className="app-nav-profile-pic-container">
          <div className="app-nav-profile-pic-wrapper">
            <img
              className="app-nav-profile-pic"
              src={process.env.REACT_APP_IMAGE_URL}
              alt=""
            ></img>
          </div>
        </div>
        <span className="app-my-description-first">
          {Texts.SENTENCE_MY_DESCRIPTION_FIRST}
        </span>
        <span className="app-my-description-second">
          {Texts.SENTENCE_MY_DESCRIPTION_SECOND}
        </span>
        <p className="app-my-description-sentence">{Texts.SENTENCE_ABOUT_ME}</p>
        <p className="app-my-description-sentence">{Texts.SENTENCE_FOOTBALL}</p>
      </div>
    </div>
  );
}
