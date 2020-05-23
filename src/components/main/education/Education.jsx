import React from 'react';
import Timeline from '../common/timeline';
import data from './data';
import { Text } from 'grommet';
import './Education.css';

export default function () {
  return (
    <>
      <div className="education-heading">
        <Text size="32px" weight="bold">
          Education
        </Text>
      </div>
      <Timeline data={data} />
    </>
  );
}
