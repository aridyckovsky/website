import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/CV/Education';
// import Experience from '../components/CV/Experience';
// import Skills from '../components/CV/Skills';
// import Courses from '../components/CV/Courses';
import References from '../components/CV/References';

// import courses from '../data/cv/courses';
import degrees from '../data/cv/degrees';
// import work from '../data/cv/work';
// import { skills, categories } from '../data/cv/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  // Experience: () => <Experience data={work} />,
  // Skills: () => <Skills skills={skills} categories={categories} />,
  // Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const CV = () => (
  <Main
    title="CV"
    description="Ari Dyckovsky's CV. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="cv">Curriculum Vitae</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default CV;
