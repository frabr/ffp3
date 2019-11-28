import React from "react"
import { renderHtmlToReact } from "../utils/html"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"
import { Range, getTrackBackground } from "react-range"

const Show = ({ title, show, number, avec, url, htmlAst, subject }) => {
  const player = React.useRef(null)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(2)

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
    // on copie player.current avant qu'il ne change
    const specificPlayer = player.current

    specificPlayer.addEventListener("timeupdate", e => {
      setCurrentTime(e.target.currentTime)
    })

    // 2 cas de figure
    if (specificPlayer.duration) {
      // le player est déjà chargé (et sa data avec) (le + souvent quand page caché)
      setDuration(player.current.duration)
    } else {
      // le player n'est pas encore chargé, on lui colle un eventlistener 
      specificPlayer.addEventListener("loadeddata", e => {
        setDuration(player.current.duration)
      })
    }


    return () => {
      specificPlayer.removeEventListener("timeupdate", () => {})
      specificPlayer.removeEventListener("loadeddata", () => {})
    }
  }, [player])

  function getTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      )
    }
  }

  return (
    <>
      {/* <p
        className="title is-1 is-family-sans-serif"
        style={{ textAlign: "center" }}
      >
        . . .
      </p> */}
      <div className="box" style={{ marginBottom: 50 }}>
        {/* <div
        style={{
          margin: "50px auto",
          // border: "solid 5px Gainsboro",
          borderRadius: "2px",
        }}
      ></div> */}
        <article class="media">
          <div class="media-left desk-only" style={{ alignSelf: "center" }}>
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
                <FontAwesomeIcon
                  icon={isPlaying ? faPause : faPlay}
                  size="2x"
                />
              </span>
            </button>
          </div>
          <div class="media-content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <div>
                <h2 class="title is-3">“{title}”</h2>
                <p class="subtitle is-5">{`${subject} avec ${avec}`}</p>
              </div>
              <div>
                <p>
                  <span
                    style={{ margin: 5 }}
                    className="tag is-dark is-family-sans-serif"
                  >
                    {show}
                  </span>

                  <span
                    style={{ margin: 5 }}
                    className="tag is-dark is-family-sans-serif"
                  >
                    #{number}
                  </span>
                </p>
              </div>
            </div>

            {htmlAst && <div class="content">{renderHtmlToReact(htmlAst)}</div>}
            <audio
              // style={{ width: "100%" }}
              src={url}
              ref={player}
            />
            <div style={{ textAlign: "right", marginBottom: 10 }}>
              <p class="subtitle is-5">
                {getTime(currentTime)} / {getTime(duration)}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                class="media-left mobile-only"
                style={{ alignSelf: "center" }}
              >
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
                    <FontAwesomeIcon
                      icon={isPlaying ? faPause : faPlay}
                      size="2x"
                    />
                  </span>
                </button>
              </div>

              <Range
                step={1}
                min={0}
                max={duration}
                values={[currentTime]}
                onChange={([time]) => {
                  setCurrentTime(time)
                  player.current.currentTime = time
                }}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      // height: "6px",
                      height: "10px",
                      width: "100%",
                      // backgroundColor: "#ccc",
                      margin: "10px auto",
                      borderRadius: "3px",
                      background: getTrackBackground({
                        min: 0,
                        max: duration,
                        values: [currentTime],
                        colors: ["#FF7F50", "#55acee"],
                      }),
                    }}
                    className="track"
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="thumb"
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "30px",
                      backgroundColor: "#F9F9F9",
                    }}
                  />
                )}
              />
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Show
