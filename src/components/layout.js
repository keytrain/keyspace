import React from "react"
import * as layoutStyles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      {children}
      <footer></footer>
    </div>
  )
}
