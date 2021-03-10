import React from "react"
import { Link } from "gatsby"
import * as postsStyles from "./posts.module.css"

export default function Posts({ node }) {
  return (
    <div>
      <Link to={node.fields.slug}>
        <div className={postsStyles.postLink}>
          <span className={postsStyles.postTitle}>
            {node.frontmatter.title}
          </span>
          <span className={postsStyles.postDate}>{node.frontmatter.date}</span>
        </div>
      </Link>
    </div>
  )
}
