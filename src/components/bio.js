/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

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

  const { author, social } = data.site.siteMetadata
  return (
    <div
      className="flex-column-container"
      style={{
        marginBottom: rhythm(2.5),
      }}
    >
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
          I'm a Full Stack Developer based in New York City, building useful
          things using cool technologies.
        </div>
      </div>

      <br />
      <br />
      <div className="flex-containee">
        <a
          className="social-media"
          href={`https://www.linkedin.com/in/talluigi`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/color/52/000000/linkedin.png" />
        </a>

        <a
          className="social-media"
          href={`https://twitter.com/luigilegion`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/color/52/000000/twitter.png" />
        </a>

        <a
          className="social-media"
          href={`mailto:luigi.t.agr@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/color/52/000000/gmail.png" />
        </a>

        <a
          className="social-media"
          href={`https://www.meetup.com/javascript-programmers`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/ios-filled/52/000000/meetup.png" />
        </a>

        <a
          className="social-media"
          href={`https://github.com/luigilegion`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/ios-glyphs/52/000000/github.png" />
        </a>
      </div>
    </div>
  )
}

export default Bio
