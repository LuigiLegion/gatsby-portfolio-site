/* eslint-disable react/jsx-pascal-case */

// Imports
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

// Component
const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />

      <h1>Page Not Found</h1>

      <p>This route does not exist.</p>
    </Layout>
  );
};

// Query
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// Prop Types
NotFoundPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

// Exports
export default NotFoundPage;
