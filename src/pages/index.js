import React from "react"
import { Link } from "gatsby"
import "./style.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div>
      <div style={{ margin: "auto", maxWidth: `200px`, opacity: 0.8 }}>
        <Image />
      </div>
      <h1 style={{ textAlign: "center", marginTop: "-20px", fontSize: 55 }}>
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
    <div
      style={{
        border: "solid 3px WhiteSmoke",
        padding: 16,
        marginBottom: 10,
        borderRadius: 7,
      }}
    >
      <h2>FFP3 Ep.1 - Hong Kong - Camille</h2>
      <p>Entretien avec Camille</p>
      <iframe
        width="100%"
        height="120"
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Faudioculture%2Faudio-culture-002-mary-anne-hobbs%2F"
        frameborder="0"
      ></iframe>
    </div>
    <div
      style={{
        border: "solid 3px WhiteSmoke",
        padding: 16,
        marginBottom: 10,
        borderRadius: 7,
      }}
    >
      <h2>CBO Ep.5 - Brigades Rouges - Barbara Balzerani</h2>
      <p>
        Lourdement condamnée, libérée mais non repentie, l’ancienne directrice
        stratégique des Brigades Rouges Barbara Balzerani avait déjà fiché une
        solide étoile dans le ciel partisan des révolutionnaires avec Camarade
        Lune, paru aux éditions Cambourakis en 2017. En reprenant la main sur
        son histoire, elle poursuit aujourd’hui sur CBO la transmission de cet
        héritage.
      </p>
      <iframe
        width="100%"
        height="60"
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fmaisondelagr%C3%A8ve%2Fles-brigades-rouges-barbara-balzerani-cbo-podcast-5-juin-2019%2F"
        frameborder="0"
      ></iframe>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
