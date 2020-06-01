import React from 'react';
import Timeline from '../common/timeline';
import data from './data';
import './Education.css';

export default function () {
  return (
    <>
      <div className="education-heading">
        <span size="32px" weight="bold">
          Education
        </span>
      </div>
      <Timeline data={data} />
    </>
  );
}
