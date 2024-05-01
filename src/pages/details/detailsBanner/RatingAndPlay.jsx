import { FaStar } from "react-icons/fa";
import classes from "./RatingAndPlay.module.scss";
import Playbtn from "../Playbtn";
import { useState } from "react";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

function RatingAndPlay({ data, video }) {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  function startPlay() {
    setShow(true);
    setVideoId(video.key);
  }
  return (
    <div className={classes.row}>
      <h1 className={classes.rating}>
        {data.vote_average.toFixed(1)}
        <FaStar />
      </h1>
      <Playbtn onClick={startPlay} />
      <VideoPopup
        setShow={setShow}
        show={show}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
}

export default RatingAndPlay;
