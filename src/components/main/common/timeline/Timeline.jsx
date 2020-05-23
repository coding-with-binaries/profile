import React from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css';

export default function (props) {
  const { data } = props;
  return (
    <div className="app-timeline">
      {data.map((datum, i) => (
        <TimelineItem key={i} spec={datum} />
      ))}
    </div>
  );
}
