import React from 'react';
import Timeline from '../common/timeline';
import data from './data';
import './Experience.css';

export default function () {
  return (
    <>
      <div className="experience-heading">
        <span>Experience</span>
      </div>
      <Timeline data={data} />
    </>
  );
}
