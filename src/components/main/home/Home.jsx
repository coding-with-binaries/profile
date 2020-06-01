import React from 'react';
import './Home.css';
import Texts from '../../../constants/text-en';
import { Github, Twitter, Linkedin, Mail } from 'grommet-icons';

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
      <div
        direction="row"
        align="center"
        justify="center"
        className="app-home-social"
      >
        <a
          href="https://github.com/coding-with-binaries"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github className="app-home-social-icon" />
        </a>
        <a
          href="https://twitter.com/lifeofvarun"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter className="app-home-social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/varunsharma95/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin className="app-home-social-icon" />
        </a>
        <a href="mailto:coding.with.binaries@gmail.com">
          <Mail className="app-home-social-icon" />
        </a>
      </div>
    </div>
  );
}
