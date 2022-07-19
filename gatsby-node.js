const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    {
      allPrismicBlogPost {
        nodes {
          id
          url
        }
      }
    }
  `)

  queryResults.data.allPrismicBlogPost.nodes.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve("src/templates/blog-post.js"),
      context: {
        id: page.id,
      },
    })
  })
}
