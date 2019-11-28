import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import EmbedShow from "../components/embedShow"
import { Helmet } from "react-helmet"
import "../components/layout.css"
import "../pages/style.scss"



export default ({ data }) => {
  const post = data.markdownRemark
  console.log(data)
  return (
    <html>
      <Helmet>
        <meta name="twitter:card" content="player"/>
        <meta name="twitter:player" content={`https://www.ffp3.live${post.fields.slug}`} />
        <meta name="twitter:secureurl:player_url" content={`https://www.ffp3.live${post.fields.slug}`} />

        <meta name="twitter:player:width" content="500"/>
        <meta name="twitter:player:height" content="200"/>
        <meta name="twitter:title" content={post.frontmatter.title} />

      </Helmet>
      <EmbedShow
        avec={post.frontmatter.avec}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        url={post.frontmatter.url}
        image={post.frontmatter.image}
        show={post.frontmatter.show}
        number={post.frontmatter.number}
        subject={post.frontmatter.subject}
      />
    </html>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields { slug }
      htmlAst
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
    }
  }
`
