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

    <div>
      <div style={{ margin: "auto", maxWidth: `200px`, opacity: 0.8 }}>
        <Image />
      </div>
      <h1
        className="title is-1"
        style={{ textAlign: "center", marginTop: "-20px", fontSize: 55 }}
      >
        ffp3
      </h1>
    </div>
    <div
      style={{
        margin: "50px auto",
        maxWidth: "400px",
        borderTop: "solid 10px Gainsboro",
      }}
    ></div>
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <p style={{ textAlign: "center" }}>
        FFP3 désigne la catégorie la plus efficace de masques anti-particules,
        celle qui autorise à rester là où on ne devrait pas. C'est aussi un
        podcast dans lequel on s'entretient avec celles et ceux qui, à travers
        le monde, en ont l'usage.
      </p>
      <button class="button">Button</button>
      <button class="button is-dark">Button</button>
    </div>
    <div
      style={{
        margin: "50px auto",
        maxWidth: "400px",
        borderTop: "solid 10px Gainsboro",
      }}
    ></div>
    <ShowList />
    <div
      style={{
        margin: "50px auto",
        maxWidth: "400px",
        borderTop: "solid 10px Gainsboro",
      }}
    ></div>
  </Layout>
)

export default IndexPage
