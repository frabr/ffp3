import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import EmbedShow from "../components/embedShow"
import Image from "../components/image"

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
          content={`https://www.ffp3.live/embed/ffp3_0_hong_kong`}
        />
        <meta
          name="twitter:secureurl:player_url"
          content="https://www.ffp3.live/embed/ffp3_0_hong_kong/"
        />

        <meta name="twitter:player:width" content="500" />
        <meta name="twitter:player:height" content="200" />
        <meta name="twitter:title" content="Hong Kong" />
      </Helmet>
      <body>
      <section className="hero is-fullheight">
        <div style={{ margin: "auto", maxWidth: 600 }}>
          <div
            className="upper"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              className="logo-and-title"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // margin: "auto 30px",
              }}
            >
              <div style={{ width: `200px`, opacity: 0.8 }}>
                <Image />
              </div>
              <h1
                className="title is-1 is-family-sans-serif"
                style={{
                  textAlign: "center",
                  marginTop: "-20px",
                  fontSize: 55,
                }}
              >
                . ffp3 .
              </h1>
            </div>

            {/* div pour faire de la marge au sein du flex */}
            <div style={{ width: 30, height: 30 }}></div>

            <div
              className="description"
              style={{
                display: "flex",
                margin: "20px auto 7px auto",
                maxWidth: 300,
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <h2
                className="subtitle is-4 is-family-primary"
                style={{ textAlign: "left" }}
              >
                Podcast d'entretiens avec celles et ceux qui, à travers le
                monde, restent malgré les gaz.
              </h2>
            </div>
          </div>
          {/* <div
            className="lower"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              flex: 1,
              margin: "30px auto",
            }}
          >
            <button
              style={{ margin: 10 }}
              class="button is-small is-info is-family-sans-serif"
            >
              iTunes
            </button>
            <button
              style={{ margin: 10 }}
              class="button is-small is-primary is-family-sans-serif"
            >
              twitter
            </button>
            <button
              style={{ margin: 10 }}
              class="button is-small is-warning is-family-sans-serif"
            >
              RSS
            </button>
          </div> */}
        </div>
        </section>

        {/* <EmbedShow
          avec={post.frontmatter.avec}
          date={post.frontmatter.date}
          title={post.frontmatter.title}
          url={post.frontmatter.url}
          image={post.frontmatter.image}
          show={post.frontmatter.show}
          episode={post.frontmatter.episode}
          subject={post.frontmatter.subject}
        /> */}
      </body>
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
