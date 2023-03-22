// gatsby-node.js
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        {
          allContentfulBlogPost {
              edges {
                node {
                  title
                  heroImage {
                    title
                    file {
                      url
                    }
                  }
                  slug
                  tags
                  publishDate(locale: "ja-JP", formatString: "YYYY年MM月DD日")
                  body {
                    childMdx {
                      body
                    }
                  }
                }
              }
          }
        }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const { edges } = result.data.allContentfulBlogPost

    edges.forEach(edge => {
        createPage({
            path: `/post/${edge.node.slug}/`,
            component: path.resolve("./src/templates/post.jsx"),
            context: { post: edge.node }
        })
    });
}