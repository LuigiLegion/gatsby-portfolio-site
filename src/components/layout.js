/* eslint-disable no-undef */

// Imports
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { rhythm, scale } from '../utils/typography';

// Component
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to="/"
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
    );
  }

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>

      <main>{children}</main>

      <footer className="flex-row-container built-with">
        {`© ${new Date().getFullYear()}, Built with `}
        <div className="flex-medium-containee left">
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        {location.pathname !== rootPath ? (
          <div className="flex-containee right">
            <Link to="/">← Back</Link>
          </div>
        ) : null}
      </footer>
    </div>
  );
};

// Prop Types
Layout.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.array,
};

// Exports
export default Layout;
