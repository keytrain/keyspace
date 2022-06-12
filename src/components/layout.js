import React from "react"
import { Link } from "gatsby"

import * as layoutStyles from "./layout.module.css"

export default function Layout({ children, detached }) {
  return (
    <div className={layoutStyles.layout}>
      {!detached && (
        <nav>
          <div className={layoutStyles.navLinks}>
            <Link to="/">blog</Link>
          </div>
          <div className={layoutStyles.navLinks}>
            <Link to="/obsessions">obsessions</Link>
          </div>
        </nav>
      )}
      {children}
    </div>
  )
}
