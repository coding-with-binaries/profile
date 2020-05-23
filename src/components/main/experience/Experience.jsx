import React from 'react';
import Timeline from '../common/timeline';
import data from './data';
import { Text } from 'grommet';
import './Experience.css';

export default function () {
  return (
    <>
      <div className="experience-heading">
        <Text size="32px" weight="bold">
          Experience
        </Text>
      </div>
      <Timeline data={data} />
    </>
  );
}
