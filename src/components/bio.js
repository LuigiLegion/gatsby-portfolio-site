/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

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
  `)

  // const { author, social } = data.site.siteMetadata;
  const { author } = data.site.siteMetadata

  return (
    <div
      className="flex-column-container"
      style={{
        marginBottom: rhythm(2.5),
      }}
    >
      <div className="flex-containee social-media-container">
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

      <br />
      <br />

      <div className="flex-row-container">
        {/* <Image
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
        /> */}

        <div>
          <div>
            I'm a Software Engineer specializing in JavaScript and the NERDS
            stack, and I'm incredibly passionate about learning and mastering
            new technologies.
          </div>

          <br />

          <div>
            <span className="bold-text-style">Proficient:</span> JavaScript,
            React, Redux, Node.js, Express, PostgreSQL, Sequelize, Firebase,
            CSS3, HTML5, Git, GitHub
          </div>

          <div>
            <span className="bold-text-style">Knowledgeable:</span> React
            Native, Webpack, Socket.io, TDD (Mocha, Chai, Jasmine)
          </div>

          <div>
            <span className="bold-text-style">Some Familiarity:</span> SQL,
            MySQL
          </div>

          <br />

          <div>
            I'm also a co-organizer of NYC Coders, a meetup group on Meetup.com
            aimed at encouraging students and professionals in the industry to
            collaborate and build community.
          </div>

          <div>
            <Link to="/meetups" className="bold-text-style">
              Check out
            </Link>{' '}
            our upcoming meetups if you're in the area.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
