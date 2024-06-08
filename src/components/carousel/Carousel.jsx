import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import classes from "./Carousel.module.scss";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";
import CarouselItem from "./CarouselItem";

function Carousel({ data, isLoading, endpoint, title }) {
  const carouselContainer = useRef();
  function navigation(dir) {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }
  return (
    <section className={classes.carousel}>
      <div className={classes.layout}>
        {title && <div className={classes.carouselTitle}>{title}</div>}

        <BsFillArrowLeftCircleFill
          className={`${classes.carouselLeftNav} ${classes.arrow} `}
          onClick={() => navigation("left")}
        />

        <BsFillArrowRightCircleFill
          className={`${classes.carouselRighttNav} ${classes.arrow}`}
          onClick={() => navigation("right")}
        />
        {!isLoading && (
          <ul className={classes.carouselItems} ref={carouselContainer}>
            {data?.map((item, index) => {
              return (
                <CarouselItem item={item} key={index} endpoint={endpoint} />
              );
            })}
          </ul>
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
