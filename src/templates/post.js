import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import * as postStyles from "./post.module.css"

export default function Post({ data }) {
  const post = data.markdownRemark
  return (
    <Layout detached={post.frontmatter.detached === "true"}>
      <div className={postStyles.post}>
        <header>
          <div className={postStyles.postTitle}>{post.frontmatter.title}</div>
          <div className={postStyles.dateContainer}>
            {post.frontmatter.updated ? (
              <span className={postStyles.postDate}>
                Updated {post.frontmatter.updated}
              </span>
            ) : (
              <span className={postStyles.postDate}>
                {post.frontmatter.date}
              </span>
            )}
          </div>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer></footer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM Do, YYYY")
        updated(formatString: "MMM Do, YYYY")
        detached
      }
    }
  }
`
