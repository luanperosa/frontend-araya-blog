import React from 'react';
import SkillsSection from '../theme/skills';

const ProgressBar = ({ number }) => (
  <div>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => <span style={{ display: 'block' }} key={index}>{index}</span>)}
  </div >
);
export default function Skills() {
  return (
    <SkillsSection>
      <div className="content">
        <div className="title">
          <h1 className="light bg-color bg-secundary">{'<\\ Skills >'}</h1>
        </div>
        <div className="wrapper-skills">
          <ProgressBar number="7" />
        </div>
      </div>
    </SkillsSection>
  );
}
