import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./DetailsBanner.module.scss";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import LogoSpinner from "../../../ui/LogoSpinner.jsx";
import Error from "../../../ui/Error.jsx";
import Overview from "./Overview.jsx";
import MovieInfo from "./MovieInfo.jsx";
import RatingAndPlay from "./RatingAndPlay.jsx";
import BannerTitle from "./BannerTitle.jsx";
import { URL } from "../../../utils/api.js";
import Cast from "./Cast.jsx";

function DetailsBanner({ video, crew, credits, isLoadingCredits }) {
  const { mediaType, id } = useParams();
  const { data, isLoading } = useFetch(`/${mediaType}/${id}`);
  const _genres = data?.genres?.map((g) => g.id);
  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );
  useEffect(() => {
    window.scrollTo({ top: "0" });
  }, []);
  if (isLoading) return <LogoSpinner />;
  if (!data) return <Error />;
  return (
    <div className={classes.detailsBanner}>
      <>
        <div className={classes["backdrop-img"]}>
          <Img src={URL + data.backdrop_path} />
        </div>
        <div className={classes["opacity-layer"]}></div>
        <div className="layout">
          <div className={classes.content}>
            <div className={classes.left}>
              {data.poster_path && (
                <Img
                  className={classes.posterImg}
                  src={URL + data.poster_path}
                />
              )}
              {!data.poster_path && (
                <Img className={classes.posterImg} src={PosterFallback} />
              )}
            </div>
            <div className={classes.right}>
              <BannerTitle data={data} />
              <Genres data={_genres} width={"150px"} />
              <RatingAndPlay data={data} video={video} />
              <Overview data={data} />
              <MovieInfo data={data} director={director} writer={writer} />
              <Cast data={credits?.cast} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default DetailsBanner;
