import classes from "./VideosSection.module.scss";
import noPoster from "../../../assets/no-poster.png";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import Playbtn from "../Playbtn";
import { useState } from "react";
import VideoSkeleton from "./VideoSkeleton";
import { useSelector } from "react-redux";

const VideosSection = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { isLoading, videos } = useSelector((state) => state.details);
  function handleClick(video) {
    setVideoId(video.key);
    setShow(true);
  }

  return (
    <section className={classes.videosSection}>
      <div className="layout">
        <h3 className={classes.sectionHeading}>Official Videos</h3>
        {!isLoading ? (
          <ul className={classes.videos}>
            {videos?.map((video) => (
              <li
                key={video.id}
                className={classes.videoItem}
                onClick={() => handleClick(video)}
              >
                <div className={classes.videoThumbnail}>
                  <Img
                    src={`${
                      video.key
                        ? `https://img.youtube.com/vi/${video.key}/mqdefault.jpg`
                        : noPoster
                    }`}
                  />
                  <Playbtn isRemoveTitle={true} />
                </div>
                <div className={classes.videoTitle}>{video.name}</div>
              </li>
            ))}
          </ul>
        ) : (
          <VideoSkeleton />
        )}
      </div>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </section>
  );
};

export default VideosSection;
