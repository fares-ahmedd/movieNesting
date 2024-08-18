import { FaStar } from "react-icons/fa";
import classes from "./RatingAndPlay.module.scss";
import Playbtn from "../Playbtn";
import { useState } from "react";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import { useSelector } from "react-redux";
import { selectMovieVideo } from "../../../store/slices/detailsSlice";

function RatingAndPlay({ data }) {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const video = useSelector(selectMovieVideo);
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
