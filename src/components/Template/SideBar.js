import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ari Dyckovsky</h2>
        <p><a href="mailto:ari@aridyckovsky.com">ari@aridyckovsky.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ari. I&apos;m a PhD Candidate in <a href="https://psych.princeton.edu/">Psychology at Princeton University</a>, where
        I study collective psychological processes in large-scale social networks with Dr. Alin Coman in the <a href="https://comanlab.com/">Collectives in Cognition Lab</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/cv') ? <Link to="/cv" className="button">Learn More</Link> : <Link to="/" className="button">Home</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ari Dyckovsky <Link to="/">aridyckovsky.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
