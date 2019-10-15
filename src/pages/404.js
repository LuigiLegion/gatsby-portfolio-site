import { graphql } from 'gatsby'
import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

class NotFoundPage extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Page Not Found</h1>
        <p>This route does not exist.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
