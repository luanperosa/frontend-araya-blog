import React from 'react';
import SkillsSection, { ProgressBarStyle, WrapperProgress } from '../theme/skills';

const skills = [
  {
    id: 0,
    icon: 'angular',
    number: 10,
  },
  {
    id: 1,
    icon: 'laravel',
    number: 15,
  },
  {
    id: 2,
    icon: 'magento',
    number: 20,
  },
  {
    id: 3,
    icon: 'node',
    number: 7.7,
  },
  {
    id: 4,
    icon: 'react',
    number: 8,
  },
  {
    id: 5,
    icon: 'docker',
    number: 8,
  },
];

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
          {
            skills.map((item) => <WrapperProgress key={item.id}>
              <img src={`/skills/${item.icon}.png`} />
              <ProgressBar number={item.number} size={20} />
            </WrapperProgress>)
          }
        </div>
      </div>
    </SkillsSection>
  );
}
