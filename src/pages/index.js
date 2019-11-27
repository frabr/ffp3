import React from "react"
import { Link } from "gatsby"
import "./style.scss"
import Layout from "../components/layout"
import ShowList from "../components/showList"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Podcast" />
    <Hero/>


    <section style={{marginBottom: 200}}>
      <ShowList />
    </section>

  </Layout>
)

export default IndexPage
