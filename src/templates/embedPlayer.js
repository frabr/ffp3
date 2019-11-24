import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Show from "../components/show"
import { Helmet } from "react-helmet"
import "./layout.css"


export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post)
  return (
    <html>
      <Helmet>
        <meta name="twitter:card" content="player"/>
        {/* <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Show
        avec={post.frontmatter.avec}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        url={post.frontmatter.url}
        image={post.frontmatter.image}
        show={post.frontmatter.show}
        episode={post.frontmatter.episode}
        subject={post.frontmatter.subject}
        htmlAst={post.htmlAst}
      />
    </html>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        status
        avec
        date
        title
        url
        image
        show
        episode
        subject
      }
    }
  }
`
