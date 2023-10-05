import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Ari M. Dyckovsky's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Under Construction</Link></h2>
        </div>
      </header>
      <p> Welcome to my in-progress website.
        {/* Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/cv">CV</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me. */}
      </p>
      <p> Source available <a href="https://github.com/aridyckovsky/website">here</a>.</p>
    </article>
  </Main>
);

export default Index;
