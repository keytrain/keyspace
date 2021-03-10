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
          <div className={postsStyles.postDate}>
            {node.frontmatter.date} - {node.timeToRead} minute read
          </div>
        </div>
      </Link>
    </div>
  )
}
