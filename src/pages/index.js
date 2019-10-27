import React from "react"
import { Link } from "gatsby"
import "./style.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import ShowList from "../components/showList"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="section">
      <div style={{ margin: "auto", maxWidth: 600 }}>
        <div
          className="upper"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div
            className="logo-and-title"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: `200px`, opacity: 0.8 }}>
              <Image />
            </div>
            <h1
              className="title is-1 is-family-sans-serif"
              style={{ textAlign: "center", marginTop: "-20px", fontSize: 55 }}
            >
              . ffp3 .
            </h1>
          </div>

          <div
            className="description"
            style={{
              display: "flex",
              margin: "20px auto 7px auto",
              width: 300,
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <h2 className="subtitle is-4 is-family-primary" style={{ textAlign: "left" }}>
              Podcast d'entretiens avec celles et ceux qui, à travers le monde,
              restent malgré les gazs.
            </h2>
          </div>
        </div>
        <div
          className="lower"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flex: 1,
            margin: "20px 10px",
          }}
        >
          <button style={{ margin: 10 }} class="button is-small is-info is-family-sans-serif">
            iTunes
          </button>
          <button style={{ margin: 10 }} class="button is-small is-primary is-family-sans-serif">
            twitter
          </button>
          <button style={{ margin: 10 }} class="button is-small is-warning is-family-sans-serif">
            RSS
          </button>
        </div>
      </div>
    </section>
    <section>
      <ShowList />
    </section>
    <div
      style={{
        margin: "50px auto",
        border: "solid 5px Gainsboro",
        borderRadius: "2px"
      }}
    ></div>
  </Layout>
)

export default IndexPage
