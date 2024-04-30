import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import classes from "./DetailsBanner.module.scss";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import LogoSpinner from "../../../ui/LogoSpinner.jsx";
import Error from "../../../ui/Error.jsx";
import { FaStar } from "react-icons/fa";
import Playbtn from "../Playbtn.jsx";

const URL = "https://image.tmdb.org/t/p/original/";
function DetailsBanner({ video, crew }) {
  const { mediaType, id } = useParams();
  const { data, isLoading } = useFetch(`/${mediaType}/${id}`);
  const _genres = data?.genres?.map((g) => g.id);
  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  }
  useEffect(() => {
    window.scrollTo({ top: "0" });
  }, [isLoading]);
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
              {data.poster_path ? (
                <Img
                  className={classes.posterImg}
                  src={URL + data.poster_path}
                />
              ) : (
                <Img className={classes.posterImg} src={PosterFallback} />
              )}
            </div>
            <div className={classes.right}>
              <div className={classes.title}>
                {`${data.name || data.title} (${dayjs(data.release_date).format(
                  "YYYY"
                )})`}
              </div>
              <div className={classes.subtitle}>{data?.tagline}</div>
              <Genres data={_genres} />
              <div className={classes.row}>
                <h1 className={classes.rating}>
                  {data.vote_average}
                  <FaStar />
                </h1>
                <Playbtn />
              </div>
              <div className={classes.overview}>
                <div className={classes.heading}>Overview</div>
                <p className={classes.description}>{data.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default DetailsBanner;
