import classes from "./Cast.module.scss";

import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";
import CastSkeleton from "./CastSkeleton";
import { URL } from "../../../utils/api";

const Cast = ({ data, isLoading }) => {
  return (
    <div className={classes.castSection}>
      <div className={classes.sectionHeading}>Top Cast</div>
      {isLoading && <CastSkeleton />}

      {!isLoading && (
        <div className={classes.listItems}>
          {data?.map((item) => {
            let imgUrl = item.profile_path ? URL + item.profile_path : avatar;
            return (
              <div className={classes.listItem} key={item.id}>
                <div className={classes.profileImg}>
                  <Img src={imgUrl} />
                </div>
                <h3 className={classes.name}>{item.name}</h3>
                <span className={classes.character}>{item.character}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cast;
