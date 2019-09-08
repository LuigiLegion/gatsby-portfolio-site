const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const axios = require('axios')

const getMeetups = meetupGroupId =>
  axios.get(
    `https://api.meetup.com/2/events?&sign=true&photo-host=public&group_id=${meetupGroupId}&page=20`
  )

const getMeetupGroupsEventsData = meetupGroups =>
  // eslint-disable-next-line no-undef
  Promise.all(
    meetupGroups.map(async curMeetupGroup => {
      const { data } = await getMeetups(curMeetupGroup)
      return { data }
    })
  )

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create all meetups page
  const allMeetups = await getMeetupGroupsEventsData(['31377401'])

  createPage({
    path: '/meetups',
    component: require.resolve('./src/components/meetups.js'),
    context: { allMeetups },
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
