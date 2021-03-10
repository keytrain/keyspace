import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/posts"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.access === "private") return null
          return <Posts key={node.id} node={node} />
        })}
      </div>
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
