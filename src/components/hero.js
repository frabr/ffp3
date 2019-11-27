import React from "react"
import "../pages/style.scss"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

const Hero = () => {
  return (
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
              style={{ textAlign: "center", marginTop: "-20px", fontSize: 55 }}
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
              Podcast d'entretiens avec celles et ceux qui, à travers le monde,
              restent malgré les gaz.
            </h2>
          </div>
        </div>
        <div
          className="lower"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            flex: 1,
            margin: "30px auto",
          }}
        >
          <a href="https://google.fr" style={{ margin: 10 }}>
            <button
              class="button is-small is-info is-family-sans-serif"
              style={{width: 120 }}

            >
              iTunes
            </button>
          </a>
          <a href="https://twitter.com/FFP3_podcast" style={{ margin: 10 }}>
          <button
            class="button is-small is-primary is-family-sans-serif"
            style={{width: 120 }}

          >
            twitter
          </button>
          </a>
          <a href="/rss.xml" style={{ margin: 10 }}>

          <button
            class="button is-small is-warning is-family-sans-serif"
            style={{width: 120 }}
          >
            RSS
          </button>
          </a>
        </div>
      </div>
      <div
        className="hero-foot"
        style={{ textAlign: "center", marginBottom: 20 }}
      >
        <h2 className="subtitle is-3" style={{ marginBottom: "-10px" }}>
          <span className="tag is-dark is-large is-family-sans-serif">
            Émissions
          </span>
        </h2>
        <FontAwesomeIcon icon={faCaretDown} size="3x" color="rgba(0,0,0,0.8)" />
      </div>
    </section>
  )
}

export default Hero
