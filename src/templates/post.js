import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero"



import { Helmet } from "react-helmet"
import "../components/layout.css"
import "../pages/style.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(data)
  React.useEffect(() => {
    setTimeout(() => {
      if (typeof window !== `undefined`) window.location.replace(`/`)
    }, 500);
  }, [])
  return (
    <html>
      <Helmet>
        <meta name="twitter:card" content="player" />
        <meta
          name="twitter:player"
          content={`https://www.ffp3.live/embed${post.fields.slug}`}
        />
        <meta
          name="twitter:secureurl:player_url"
          content={`https://www.ffp3.live/embed${post.fields.slug}`}
        />

        <meta name="twitter:player:width" content="320" />
        <meta name="twitter:player:height" content="200" />
        <meta name="twitter:image" content="https://www.ffp3.live/ffp3-white.png" />        
        <meta name="twitter:title" content={`Ep.${post.frontmatter.number} ${post.frontmatter.title}`} />
      </Helmet>
      <body>
      <Hero/>

      </body>
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
