import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt="Poster"
      effect="blur"
      src={src}
      width={"100%"}
      height={"100%"}
    />
  );
};

export default Img;
