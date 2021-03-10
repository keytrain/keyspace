import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import * as postStyles from "./post.module.css"

export default function Post({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <header>
        <div className={postStyles.postTitle}>{post.frontmatter.title}</div>
        <div className={postStyles.dateContainer}>
          {post.frontmatter.updated && (
            <span className={postStyles.updatedDate}>
              Updated {post.frontmatter.updated}
            </span>
          )}
        </div>
      </header>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <footer></footer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM Do, YYYY")
        updated(formatString: "MMM Do, YYYY")
      }
    }
  }
`
