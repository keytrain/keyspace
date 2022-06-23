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
            {post.frontmatter.date && (
              <span className={postStyles.postDate}>
                Written {post.frontmatter.date}
                {post.frontmatter.updated && <> - </>}
              </span>
            )}
            {post.frontmatter.updated && (
              <span className={postStyles.postDate}>
                Edited {post.frontmatter.updated}
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
