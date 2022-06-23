import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/posts"

export default function Home({ data }) {
  return (
    <Layout>
      <Posts edges={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMM Do, YYYY")
            access
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
