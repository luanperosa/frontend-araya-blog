import React from 'react';
import SkillsSection, { ProgressBarStyle } from '../theme/skills';

const ProgressBar = ({ number, size }) => (
  <ProgressBarStyle>
    {[...Array(size)].map((item, index) => <span className={index < number ? 'active' : ''} key={index}></span>)}
  </ProgressBarStyle >
);
export default function Skills() {
  return (
    <SkillsSection>
      <div className="content">
        <div className="title">
          <h1 className="light bg-color bg-secundary">{'<\\ Skills >'}</h1>
        </div>
        <div className="wrapper-skills">
          <ProgressBar number={7} size={20} />
          <ProgressBar number={19} size={20} />
          <ProgressBar number={14} size={20} />
          <ProgressBar number={3} size={20} />
        </div>
      </div>
    </SkillsSection>
  );
}
