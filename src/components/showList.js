import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Show from "./show"
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
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              status
              avec
              date
              title
              url
              image
              show
              number
              subject
            }
            htmlAst
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      {data.allMarkdownRemark.edges.filter(s => s.node.frontmatter.status === "published").map(s => (
        <Show
          avec={s.node.frontmatter.avec}
          date={s.node.frontmatter.date}
          title={s.node.frontmatter.title}
          url={s.node.frontmatter.url}
          image={s.node.frontmatter.image}
          show={s.node.frontmatter.show}
          number={s.node.frontmatter.number}
          subject={s.node.frontmatter.subject}
          event={s.node.frontmatter.event}
          htmlAst={s.node.htmlAst}
        />
      ))}
    </div>
  )
}

export default ShowList
