import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostList from "../components/post-list"

const IndexPage = ({ data }) => {
  const posts = data.allContentfulBlogPost
  return (
    <Layout>
      <PostList posts={ posts }></PostList>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>DIY SHOP プレスリリース</title>

export const query = graphql`
query allContentfulBlogPost {
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
        description {
          description
        }
      }
    }
  }
}
`
