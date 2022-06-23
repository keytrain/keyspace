import React from "react"
import { Link } from "gatsby"

import * as postsStyles from "./posts.module.css"

export default function Posts({ edges }) {
  return (
    <>
      {edges.map(({ node }) => {
        if (node.frontmatter.access === "private") return null
        return (
          <Link key={node.id} to={node.fields.slug}>
            <div className={postsStyles.postLink}>
              <span className={postsStyles.postTitle}>
                {node.frontmatter.title}
              </span>
              <div className={postsStyles.postDate}>
                {node.timeToRead} minute read
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}
