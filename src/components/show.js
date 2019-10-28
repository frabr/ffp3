import React from "react"
import { renderHtmlToReact } from "../utils/html"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"
import { Range } from "react-range"

const Show = ({ title, show, episode, avec, url, htmlAst, subject }) => {
  const player = React.useRef(null)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(null)

  const togglePlay = () => {
    if (isPlaying) {
      player.current.pause()
      setIsPlaying(false)
    } else {
      player.current.play()
      setIsPlaying(true)
    }
  }
  React.useEffect(() => {
    player.current.addEventListener("timeupdate", e => {
      setCurrentTime(e.target.currentTime)
    })
    return player.current.removeEventListener("timeupdate", () => {})
  }, [])

  function getTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      )
    }
  }

  return (
    <div>
      <div
        style={{
          margin: "50px auto",
          // border: "solid 5px Gainsboro",
          borderRadius: "2px",
        }}
      ></div>
      <article class="media">
        <div class="media-left" style={{ alignSelf: "center" }}>
          <button
            style={{
              background: "none",
              border: "none",
              useSelect: "none",
              textDecoration: "none",
            }}
            onClick={togglePlay}
            className="anti-button"
          >
            <span className="icon is-large">
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" />
            </span>
          </button>
        </div>
        <div class="media-content">
          <h2 class="title is-3">{`${show} - ep.${episode} - “${title}”`}</h2>

          <p class="subtitle is-5">{`${subject} avec ${avec}`}</p>
          <div class="content">{renderHtmlToReact(htmlAst)}</div>
          <audio
            // style={{ width: "100%" }}
            src={url}
            ref={player}
          />
          <div>
            {getTime(currentTime)} / {getTime(duration)}
          </div>
          <Range
            step={1}
            min={0}
            max={1000}
            values={[currentTime, duration]}
            onChange={values => console.log(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#ccc",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "42px",
                  width: "42px",
                  backgroundColor: "#999",
                }}
              />
            )}
          />
        </div>
      </article>
    </div>
  )
}

export default Show
