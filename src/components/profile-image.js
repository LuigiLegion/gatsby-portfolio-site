/**
 * ProfileImage component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// Imports
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

// Component
const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-image.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;

  return (
    <Image
      fixed={data.avatar.childImageSharp.fixed}
      alt={author}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        minWidth: 50,
        borderRadius: `100%`,
      }}
      imgStyle={{
        borderRadius: `50%`,
      }}
    />
  );
};

// Exports
export default ProfileImage;
