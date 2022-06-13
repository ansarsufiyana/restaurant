import React from "react";

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const [playvideo, setPlayVideo] = React.useState();
  const vidRef = React.useRef();

  const handelVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playvideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        typeof="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handelVideo}
        >
          {playvideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
