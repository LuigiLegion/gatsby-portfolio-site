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
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
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
      <p>
        I'm a Full Stack Developer based in New York City, building useful
        things using cool technologies.
        {` `}
        <a href={`https://twitter.com/luigilegion`}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAB90lEQVRIx+2VTShEURSAEVlQrBArxUIyxnv3jZ8i2cnGRlkryoKllJSS2Iho3r13ZkEsyE52IlFkISI/M/feMSxs7GzI7zhvDM0bM88dXim5dRave+75zjnv/KSk/J/fOBphDYiyBUT5KSL8GGRe0XmNScfDnCrdywh/KG5RolLWmxyEj4HhUBx5QZiPqET0IMLWQG/p4xFABkHhWaW8WwqCRWcCiElUwk+qpn2FipuVRR6y2SiFiZIpnpmQMhRKA4+vJEDPILsglx8gCHMyRukIjDXG46g0UCETTVgwv3YRXhv1WLQmUN5EWLSXu0+y33UV3V8vDfKIZpOXjUMb6XCxb/HoDrzb1jDXocKmZUGKLtSYdLAWBYsmMMKlvZWQWuwvMoEQEThy+Wgj6N7IlBkEubQzkohsfC6lUCgVLlbtBEFP9sdtD8fcYRb8o2WbQE/VJFCasBddxF8JlTUKijc/BC1ajhbomQE7olH0c4clKJw+6JefgDQihmXmpTFicmDq0m+W+s6nkv7qOLDIg4fjSUAOqr3n+UlBIH1V4YVm7Ba5dG05Z4K5lkZdXl+xRkUXwqwPUUEi21I2igejSi3XSvTRPKIOltRKEv/l1thhlr1iCXQHCyBtHeCl9636hA8ivADDZ7CS143JDR3fZhTMtwB/6rwCFZOnJcOEDkMAAAAASUVORK5CYII="></img>
        </a>
      </p>
    </div>
  )
}

export default Bio
