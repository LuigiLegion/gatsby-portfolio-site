// Imports
const axios = require('axios');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// Initializations
const getMeetups = meetupGroupId =>
  axios.get(
    `https://api.meetup.com/2/events?&sign=true&photo-host=public&group_id=${meetupGroupId}&page=5`
  );

const getMeetupGroupsEventsData = meetupGroups =>
  Promise.all(
    meetupGroups.map(async meetupGroup => {
      const { data } = await getMeetups(meetupGroup);
      return { data };
    })
  );

// Exports
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
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
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Create all meetups page
  const meetups = await getMeetupGroupsEventsData([`31377401`]);

  createPage({
    path: `/meetups`,
    component: require.resolve(`./src/components/meetups.js`),
    context: { meetups },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
