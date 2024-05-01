import classes from "./VideosSection.module.scss";
import noPoster from "../../../assets/no-poster.png";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import Playbtn from "../Playbtn";
import { useState } from "react";
import VideoSkeleton from "./VideoSkeleton";

const VideosSection = ({ data, isLoading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  function handleClick(video) {
    setVideoId(video.key);
    setShow(true);
  }
  return (
    <div className={classes.videosSection}>
      <section className="layout">
        <div className={classes.sectionHeading}>Official Videos</div>
        {!isLoading ? (
          <div className={classes.videos}>
            {data?.results?.map((video) => (
              <div
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
              </div>
            ))}
          </div>
        ) : (
          <VideoSkeleton />
        )}
      </section>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
