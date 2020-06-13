// Imports
import React from 'react';
import { Link } from 'gatsby';

// import ProfileImage from './profile-image';
import { rhythm } from '../utils/typography';

// Component
const Bio = () => {
  return (
    <div
      className="flex-column-container"
      style={{
        marginBottom: rhythm(2.5),
      }}
    >
      <div className="flex-containee social-media-container text-spacing-bottom-double">
        <a
          href="https://www.linkedin.com/in/talluigi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-container social-media-containee"
        >
          <img
            src="https://img.icons8.com/color/52/000000/linkedin.png"
            alt="LinkedIn Icon"
            className="social-media-containee social-media-icon"
          />
        </a>

        <a
          href="https://github.com/luigilegion"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-container social-media-containee"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/52/000000/github.png"
            alt="GitHub Icon"
            className="social-media-containee social-media-icon"
          />
        </a>

        <a
          href="https://twitter.com/luigilegion"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-container social-media-containee"
        >
          <img
            src="https://img.icons8.com/color/52/000000/twitter.png"
            alt="Twitter Icon"
            className="social-media-containee social-media-icon"
          />
        </a>

        <a
          href="https://www.meetup.com/nyc-coders"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-container social-media-containee"
        >
          <img
            src="https://img.icons8.com/ios-filled/52/000000/meetup.png"
            alt="Meetup Icon"
            className="social-media-containee social-media-icon"
          />
        </a>
      </div>

      <div className="flex-row-container">
        {/* <ProfileImage /> */}

        <div>
          <div className="text-spacing-bottom">
            I'm a Software Engineer specializing in JavaScript and the NERDS
            stack, and I'm incredibly passionate about learning and mastering
            new technologies.
          </div>

          <div>
            <span className="text-style-bold">Proficient:</span> JavaScript,
            Node.js, Express, PostgreSQL, Sequelize, Firebase, GraphQL, React,
            Redux, HTML5, CSS3, Git, GitHub, Heroku, Gatsby, Netlify, Travis CI,
            CI/CD
          </div>

          <div>
            <span className="text-style-bold">Knowledgeable:</span> React
            Native, Socket.IO, TDD
          </div>

          <div className="text-spacing-bottom">
            <span className="text-style-bold">Some Familiarity:</span> SQL,
            MySQL, SQLite
          </div>

          <div>
            I'm also a co-organizer of NYC Coders, a meetup group aimed at
            encouraging students and professionals in the industry to
            collaborate and build community.
          </div>

          <div>
            <Link to="/meetups" className="text-style-bold">
              Check out{' '}
            </Link>
            our upcoming meetups if you're in the area.
          </div>
        </div>
      </div>
    </div>
  );
};

// Exports
export default Bio;
