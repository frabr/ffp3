import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    {/* <div style={{display:"flex", justifyContent:"center"}}> */}
      <div>
        <div style={{margin:"auto", maxWidth: `200px` }}>
          <Image />
        </div>
        <h1 style={{textAlign:"center"}}>. ffp3 .</h1>        
        {/* <p>L'émission anti-particules</p> */}
      </div>
    {/* </div> */}

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
