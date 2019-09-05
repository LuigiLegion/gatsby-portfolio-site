/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  // const { author, social } = data.site.siteMetadata;
  const { author } = data.site.siteMetadata;

  return (
    <div
      className="flex-column-container"
      style={{
        marginBottom: rhythm(2.5),
      }}
    >
    <div className="flex-containee">
        <a
          href="https://www.linkedin.com/in/talluigi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
          src="https://img.icons8.com/color/52/000000/linkedin.png"
          alt="LinkedIn Icon"
          />
        </a>

        <a
          href="https://github.com/luigilegion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
          src="https://img.icons8.com/ios-glyphs/52/000000/github.png"
          alt="GitHub Icon"
          />
        </a>

        <a
          href="https://twitter.com/luigilegion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
          src="https://img.icons8.com/color/52/000000/twitter.png"
          alt="Twitter Icon"
          />
        </a>

        <a
          href="https://www.meetup.com/javascript-programmers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
          src="https://img.icons8.com/ios-filled/52/000000/meetup.png"
          alt="Meetup Icon"
          />
        </a>
      </div>

      <br />
      <br />

      <div className="flex-row-container">
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
        <div>
        I'm a Full Stack Developer specializing in JavaScript and the NERDS stack, and I'm incredibly passionate about learning and mastering new technologies.

        <br/>
        <br/>

        I'm also a co-organizer of a JavaScript meetup group in New York City aimed at encouraging students and professionals in the industry to collaborate and build community.

        <br />
        <br />

        <Link
        to="/meetups"
        >
        Check out
        </Link>
        {' '}
        our upcoming meetups if you're in the area!
        </div>
      </div>
    </div>
  );
};

export default Bio;
