import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import classes from "./Carousel.module.scss";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";
import CarouselItem from "./CarouselItem";

function Carousel({ data, isLoading }) {
  const carouselContainer = useRef();
  const navigate = useNavigate();

  function navigation(dir) {}
  return (
    <section ref={carouselContainer} className={classes.carousel}>
      <div className={classes.layout}>
        <BsFillArrowLeftCircleFill
          className={`${classes.carouselLeftNav} ${classes.arrow}`}
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className={`${classes.carouselRighttNav} ${classes.arrow}`}
          onClick={() => navigation("right")}
        />
        {!isLoading && (
          <div className={classes.carouselItems}>
            {data?.map((item, index) => {
              return <CarouselItem item={item} key={index} />;
            })}
          </div>
        )}
        {isLoading && (
          <div className={classes.loadingSkeleton}>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </div>
        )}
      </div>
    </section>
  );
}

export default Carousel;
