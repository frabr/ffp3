import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { renderHtmlToReact } from "../utils/html"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ShowList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              avec
              date
              title
            }
            htmlAst
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allMarkdownRemark.edges.map(s => (
        <div className="box">
          <h2 class="title is-3">{s.node.frontmatter.title}</h2>
          <p class="subtitle is-5">avec {s.node.frontmatter.avec}</p>
          <div class="content">{renderHtmlToReact(s.node.htmlAst)}</div>
        </div>
      ))}
    </div>
  )
}

export default ShowList
