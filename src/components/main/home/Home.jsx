import React from 'react';
import { Text, Image, Paragraph, Box } from 'grommet';
import './Home.css';
import Texts from '../../../constants/text-en';
import { Github, Twitter, Linkedin, Mail } from 'grommet-icons';

export default function () {
  return (
    <div className="app-home">
      <div className="app-home-content">
        <div className="app-nav-profile-pic-container">
          <Box
            className="app-nav-profile-pic-wrapper"
            elevation="large"
            align="center"
            justify="center"
          >
            <Image
              className="app-nav-profile-pic"
              src={process.env.REACT_APP_IMAGE_URL}
            ></Image>
          </Box>
        </div>
        <Text color="white" size="xxlarge">
          {Texts.SENTENCE_MY_DESCRIPTION_FIRST}
        </Text>
        <Text color="white" size="large">
          {Texts.SENTENCE_MY_DESCRIPTION_SECOND}
        </Text>
        <Paragraph color="white" style={{ maxWidth: '500px' }}>
          {Texts.SENTENCE_ABOUT_ME}
        </Paragraph>
        <Paragraph color="white" style={{ maxWidth: '500px' }}>
          {Texts.SENTENCE_FOOTBALL}
        </Paragraph>
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
