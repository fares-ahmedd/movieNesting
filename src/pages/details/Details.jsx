import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import VideosSection from "./videosSection/VideosSection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getMovieCredits,
  getMovieVideos,
} from "../../store/slices/detailsSlice";
import Similar from "./similar/Similar";
import Recommendation from "./recommendation/Recommendation";

function Details() {
  const { mediaType, id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieVideos({ mediaType, id })).unwrap();
  }, [dispatch, mediaType, id]);
  useEffect(() => {
    dispatch(getMovieCredits({ mediaType, id })).unwrap();
  }, [dispatch, mediaType, id]);
  return (
    <main>
      <DetailsBanner />
      <VideosSection />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </main>
  );
}

export default Details;
