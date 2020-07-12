import React from 'react';
import Timeline from '../common/timeline';
import data from './data';
import './Education.css';

export default function () {
  return (
    <>
      <div className="education-heading">
        <span>Education</span>
      </div>
      <Timeline data={data} />
    </>
  );
}
