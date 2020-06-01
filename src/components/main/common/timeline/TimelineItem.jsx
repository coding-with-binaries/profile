import React from 'react';
import './TimelineItem.css';

export default function (props) {
  const { spec } = props;
  return (
    <div className="app-timeline-item">
      <div className="app-timeline-item-content">
        <div className="app-timeline-item-content-header">
          <span className="app-timeline-item-content-title">{spec.title}</span>
          <time>{spec.date}</time>
        </div>
        {spec.subtitle && (
          <div className="app-timeline-item-content-subtitle">
            {spec.subtitle}
          </div>
        )}
        <ul>
          {spec.paragraphs &&
            spec.paragraphs.map((p, i) => (
              <li key={i}>
                <p>{p}</p>
              </li>
            ))}
        </ul>
        <span className="app-timeline-item-circle" />
      </div>
    </div>
  );
}
