import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.access === "private") return null
          return (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
                <span style={{ float: "right" }}>{node.frontmatter.date}</span>
              </Link>
            </div>
          )
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
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
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
