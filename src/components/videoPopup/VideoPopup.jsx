import ReactPlayer from "react-player/youtube";

import classes from "./VideoPopup.module.scss";
import { createPortal } from "react-dom";

function VideoPopup({ show, setShow, videoId, setVideoId }) {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return createPortal(
    <div className={`${classes.videoPopup} ${show ? classes.visible : ""}`}>
      <div className={classes.opacityLayer} onClick={hidePopup}></div>
      <div className={classes.videoPlayer}>
        <span className={classes.closeBtn} onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          playing={true}
        />
      </div>
    </div>,
    document.body
  );
}

export default VideoPopup;
